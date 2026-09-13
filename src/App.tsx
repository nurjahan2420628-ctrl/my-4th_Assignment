import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./components/TechnologyCard";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);


        const response = await fetch(
          "/technologies.json"
        );

        if (!response.ok) {

          throw new Error(
            "Failed to load technologies"
          );

        }

        const data: Technology[] =
          await response.json();

        setTechnologies(data);
      } catch (error) {

        console.error(error);

        toast.error(
          "Failed to load technologies."

        );
      } finally {
        setLoading(false);


        
      }
    };

    loadTechnologies();
  }, []);

  

  const handleAdd = (technology: Technology) => {
    const alreadyAdded = selectedStack.some(


      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }

    setSelectedStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  

  const handleRemove = (id: string) => {
    const technology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack((previousStack) =>
      previousStack.filter(




        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

 

  const handleRemoveAll = () => {
    if (selectedStack.length === 0) {
      toast.warning(
        "Your stack is already empty."
      );

      return;
    }

    setSelectedStack([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  return (
    <>
      <Navbar />

      <main>

     
        <Hero />

        
        <section
          id="technologies"
          className="bg-gray-50 py-16"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">

          
            <div className="mb-10">
              

              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Explore The{" "}
                <span className="brand-gradient-text">
                  Technologies
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-gray-500">
                Pick one technology per category to build your ideal stack.
              </p>
            </div>

          
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">

              





              <TechnologyGrid
                technologies={technologies}
                selectedStack={selectedStack}
                onAdd={handleAdd}
                loading={loading}
              />

              <YourStack
                selectedStack={selectedStack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />





            </div>




          </div>
        </section>

        

      </main>

      <Footer />

     
      <ToastContainer
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover
      />
    </>
  );




}

export default App;