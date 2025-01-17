import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-bold title-font mb-1">
       SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
       My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">HTML
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-gray-400">
            <div className="absolute bg-blue-800 h-1 rounded-xl w-[70%]"></div>
            </div>
           <p className="font-bold text-blue-800 text-right">70%</p> 
</div>

        </div>
      </div>
      
          </div>
        </div>

        <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             CSS
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-gray-400">
            <div className="absolute bg-blue-800 h-1 rounded-xl w-[60%]"></div>
            </div>
           <p className="font-bold text-blue-800 text-right">60%</p> 
</div>

        </div>
      </div>
      
          </div>

          <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             JavaScript
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-gray-400">
            <div className="absolute bg-blue-800 h-1 rounded-xl w-[50%]"></div>
            </div>
           <p className="font-bold text-blue-800 text-right">50%</p> 
</div>

        </div>
      </div>
      
          </div>

          <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            NEXT JS
            </h2>
          </div>
          <div className="flex-grow">
           <div className=" relative h-1 w-full bg-gray-400">
            <div className="absolute bg-blue-800 h-1 rounded-xl w-[50%]"></div>
            </div>
           <p className="font-bold text-blue-800 text-right">50%</p> 
</div>

        </div>
      </div>
      
          </div>
        
</section>

    </div>
  );
};

export default Skills;