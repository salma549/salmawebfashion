// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="space-x-8">
//         <Link to="/women">
//           <button className="bg-pink-500 text-white py-2 px-4 rounded">Women</button>
//         </Link>
//         <Link to="/men">
//           <button className="bg-blue-500 text-white py-2 px-4 rounded">Men</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="flex flex-col items-center">
//       {/* Full-Width Banner Image */}
//       <div className="w-full h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[80vh] mb-8 relative">
//         <img
//           src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200"
//           alt="Main Banner"
//           className="w-full h-full object-cover rounded-lg shadow-lg"
//         />
//         <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2">
//           <button className="bg-gray-900 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-full shadow-2xl hover:scale-105 transition-all ease-in-out duration-300">
//             Shop Now
//           </button>
//         </div>
//       </div>

//       {/* Banner Images Section */}
//       <div className="w-full flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 px-2 sm:px-4">
//         {/* Women Banner */}
//         <div className="relative w-full xs:w-1/2 lg:w-1/3 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
//           <img
//             src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300"
//             alt="Women"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-3 xs:bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <Link to="/women">
//               <button className="bg-pink-600 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                 Explore Women
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Men Banner */}
//         <div className="relative w-full xs:w-1/2 lg:w-1/3 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
//           <img
//             src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300"
//             alt="Men"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-3 xs:bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <Link to="/men">
//               <button className="bg-blue-600 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//                 Explore Men
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* About Us Section */}
//       <div className="bg-gray-100 w-full py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-12">
//         <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-4 sm:mb-6">
//           About Us
//         </h2>
//         <div className="flex flex-col xs:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
//           <div className="text-sm xs:text-base sm:text-lg text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             <p className="mb-4 sm:mb-6">
//               We are a leading fashion brand offering the latest styles and trends for both men and women. Our mission is to provide high-quality clothing that combines comfort, style, and affordability.
//             </p>
//             <p className="mb-4 sm:mb-6">
//               What makes us different is our personalized shopping experience. After selecting an outfit, our recommendation engine will suggest perfect accessories like earrings, shoes, ties, and jackets to complete your look.
//             </p>
//             <p>
//               Enjoy a seamless integration of clothing and accessories and save time while ensuring you always look your best.
//             </p>
//           </div>
//           <div className="w-full xs:w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 transform hover:scale-105 transition-all duration-300">
//             <img
//               src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="Fashion Accessories"
//               className="w-full h-auto object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Additional Images Section */}
//       <div className="p-3 xs:p-4 sm:p-6 md:p-8 w-full">
//         <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
//           <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" className="w-full h-auto object-cover rounded-md" />
//           <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
//           <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="w-full h-auto object-cover rounded-md" />
//           <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" className="w-full h-auto object-cover rounded-md" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Full-Width Banner Image */}
      <div className="w-full h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] mb-8 relative">
        <img
          src="data:image/jpeg;base64,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"
          alt="Main Banner"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        <div className="absolute bottom-4 xs:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2">
          <button className="bg-gray-900 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-2xl hover:scale-105 transition-all ease-in-out duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Banner Images Section */}
      <div className="w-full flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-12 px-2 sm:px-4">
        {/* Women Banner */}
        <div className="relative w-full xs:w-1/2 lg:w-1/3 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="Women"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 xs:bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
            <Link to="/women">
              <button className="bg-pink-600 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Women
              </button>
            </Link>
          </div>
        </div>

        {/* Men Banner */}
        <div className="relative w-full xs:w-1/2 lg:w-1/3 h-40 xs:h-48 sm:h-64 md:h-80 lg:h-[28rem] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="Men"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 xs:bottom-4 left-1/2 transform -translate-x-1/2 w-full text-center">
            <Link to="/men">
              <button className="bg-blue-600 text-white py-1 px-3 xs:py-2 xs:px-4 sm:py-2 sm:px-6 md:py-3 md:px-8 lg:py-4 lg:px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Explore Men
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-100 w-full py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-3 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-900 mb-4 sm:mb-6 lg:mb-8">
          About Us
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <div className="text-sm xs:text-base sm:text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <p className="mb-4 sm:mb-6 lg:mb-8">
              We are a leading fashion brand offering the latest styles and trends for both men and women. Our mission is to provide high-quality clothing that combines comfort, style, and affordability.
            </p>
            <p className="mb-4 sm:mb-6 lg:mb-8">
              What makes us different is our personalized shopping experience. After selecting an outfit, our recommendation engine will suggest perfect accessories like earrings, shoes, ties, and jackets to complete your look.
            </p>
            <p>
              Enjoy a seamless integration of clothing and accessories and save time while ensuring you always look your best.
            </p>
          </div>
          <div className="w-full xs:w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/4 transform hover:scale-105 transition-all duration-300">
            <img
              src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fashion Accessories"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Additional Images Section */}
      <div className="p-3 xs:p-4 sm:p-6 md:p-8 w-full">
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8">
          <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" className="w-full h-auto object-cover rounded-md" />
          <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
          <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="w-full h-auto object-cover rounded-md" />
          <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Home;
