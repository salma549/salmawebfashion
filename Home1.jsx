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
          src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ctql7AZKWyzBKd7XFMlHsulPxFqnAQqs5-Op2LhGzIworqGgH_G3nQ4RgCrdWEgsFUw&usqp=CAU" alt="Image 1" className="w-full h-auto object-cover rounded-md" />
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhMTExMVFRUXGB0VFRgYFRcdFxgYGBUXGBgYGBcYHSggHR8lGxgYIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8lICUtLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAgcEAwj/xABGEAACAQIDBgMFBQYDBQkBAAABAgMAEQQSIQUGMUFRYRMicQcygZGxFCNCUqFigpLB4fAzctFDorLC8RUXJFNzg6Oz0gj/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEAgUG/8QANBEAAgIBAwIEBAQGAgMAAAAAAAECAxEEITESQRNRYXEFIoGxMpGhwRQjUtHh8BXxQqLC/9oADAMBAAIRAxEAPwC/10e2KAGgB6UA7UHqO1ABQCgFAKAUAoAaAd6DA7/3/pQegHWgAoBQCgFAKAUANADQDtQDtQeoHSgFAYoSbVBAoAaAHpQeo7UHqBQAUAoBQCgFAKAw8hCswUMdLAgkasATZSOVQzNqZyhFdJ80xch4xIP3X/8A1UZZh/iLPM+rymxOVQdOR6jkTTJ1G+xtLIHWuj1fQCgKrtPfRIcQ0QXMF0Zr/i5genD1BrJbqXGWIrJ6VPw521dbZLbO2/BNbK4BPJtP14V1DVVy2ez9TNbo7YcrKJS9aTMKAUAoAaAdqD1Hag9QKD1AoDFAbUIF6Eg0IHagHblQeooAKAXoBQCgKzjt9IYZ1jlUqjXCy3uAVIHmW1wNRqL97VXXYrHJLsV22qpx6uGWVWBFwQQRcEcCOViO1WFi9DZYy9wLn00/XlQ5n04xLgYPYsolVi4yCUPYsxuv2eVCOFvfZTbh5fSssq5ObaexissrSxFHyTBZG1IL3LWvc2ubEKdf0qymDjBKXJfDw5fNg+gPOrjQfDG4oRRvKeCKzn91b1DeFknnYoEeBBjVZAGNrsSOLHVj8SSawNZ5LYXzreYPB4ptiW1icqeh1H+tVyqyehV8UfFiz6o+uE2/i8Lo9yvzX+n6VxFzr/CzU6tNqVmPP5Mtuw964pyEPldtB0J6dq2VanqfTJYZ5+p0Eql1LdIsNazzxQA0A7UA7cqD1AoBegMUJM0IFADQA9OVAO3KgH0oBQCgPFtnEFIWN9bZR8T/AKXNU3z6K2zqMcySOX4Hb82Fx8kaEmNmAMZPlu6r5l/Kbm9xx5007/kKT8jzrbJQ1Mox4bW3vg8++8Ry4durOP0Q1m+HvLk/b9y/4qsdC9/2L57MpWfCZWb3HKLfkoVGt6DMTXoSKtJNqrfzL9gZVH96+p71V1ZFkZGm0sUoBtUNk1Vt8lJ2xi1F7aHjcaG/I3696qlI9nT152Z6d2ttmcMjn7xNb/nX83qDYH1Bq2qzq2fJVqdN4LWPwv8AT0/sa74YlUgVWYKJJUjJPC185BPcIR8am14iUxT3PBDhS/C3W5IAt1JOlYZTjH8TK28GZ9nsozaMOZUhgL9SOFWJqSzFp+xWrE3jj3PBJHUMui2t0bbs7HQ4rxVWwiBvbgXYWAtwuFJJ9V611TWnLPkbZau11OEnyXitpiFADQDtyoB25UAoBQGKA2oBegBoBf5UA+n98qAfSgF6AUHsQW8jFmhiHM39OQ+rVi10vkUfMsp/E35I57jMIP8AtWa3BSD8oVF/4rVPV06T/fM86EevXezz+SJD2jRBIsGvMFyfWyX+tcfD/wDy+h38S3cfXP7Eh7OMflwM9zY+OR8GSI/yIrVZPNfUWaajpsdXk/2LLFtgDnWeMjZOo+GL22DzrpyJhUkVbau0gb1U2elTFIzujPkxCNcgXIPoQf7+FWU7PJGvcZVNHRdieBiVz50kvwS4IUenM96rhPxX1N/TyPH1XXV8mMLz8/8AB4sRumpLrhiYFU3GULkZiPMMh0tw4ZeetcKmTtcnxhY/coV+3zEZ9lxMDWmjDKQQXj4EBSTeM+YHTQLm1tVOrTUcx/FlY/MtXRPgi3nVgPDIdmORVvxc8jzFuJ6AGtXL2LFB5wy14DCph4QubRQWdjpcnV2Px+WnStsYqMcB/M/sbbP2nDOt4pAw58iPVTqKiNkZPCZMq5R/Ej13rs4NJZVUasAO5AH60CTZiPEI2iurehB+NgajKJcWt2j6fSpOQP0oSL0BigM0IFAD+lAD+lAaYhyFYgXsCQOptXE5OMW1udRSbWSN2XtpJTkYgODYgcL9tefL/pWXTavxdpbMttq6N0Sv0raUCgKzPj4zimd3ULGpUEsANND+rNXmarqssxFZwWxlCEHKTSyUrC45DicRiWDWd7JprkBGuvWy6djWmzT2SrjBduTzKNVVCydkuXwebeTeD7Ti8KcuWNJYwAbXN5UzFracABbtVmno8GLT5ZVbqPHti8bIldjbOm8TFwQRSOpKyR5UJUWJNi/AHK4Gp/DUOGYOJ6LuULlY+Gt/t/YnsHuRtOQXZY4u0kgv/wDGGqqNMi2evpXGWe7/ALssUw82KjX0Rm+pFWeC/Mp/5GK4ieeT2TYjj9rjb1jYfrmNR4Pqdr4qv6f1Mxbg46DMy+FKQjZAr2JYqQPfCga9676GlscS18bMJ7brJR8XsvGYI5nimgt+Kxy/xrdT86wyqa5R7desqu2ymWDYXtHxEOkoEq9fxfP/AK1MbJR9Si74fTbvHZl32RvZg8U4YuEbLlCv3PU6V31wk05LDR5tuhvqWyyvQztWCGPE+KVjW0BYyWAsoc3JbpY1dXhT+h3S26fr+xSdr7c+1tlW4gBsqnTxD+ZxcaDiFPYnWwFOovb2jwbqaujd8nyhwkYIeFmjlFspVcqka3XN7p1GunPnasfiPiX/AET4jlJwa2LNu7vB9pBQeR194Eam19bfy5a8ba7abJyfhyfs/My21dDyb7c3YixTI8jyXQZRlKjQ66gg/pWnwU+SK7pQWxHTbjINYZ5UYcM2UrflcKFPyNHSux2tVPuendbakpeTC4j/ABYud73Gmt+flKkHiQddRUwk89LObIxa64lk+lWlAoDFCTahAoAf0oB9KAfSgOee0HZEkP8A4rDXHEOAPKpPA9gbnThe3Wxz/wANBT6kRqNVONXSvz8j47h7+hiuHxTEG9kdjz/K5PfgT6HlV5h0+ox8svzLDvxvD9lRIwSrShiG/KqlQbdyW48tedq7iizV3OEcR5Zy/F7XS1lHQaaaV22eSokhu1sfG7SbLhorRg2aVvLEna9vMf2VueF7ca5cjtQOs7ueyvB4crJPfFTCxu4tGpH5YgbfxFvhXDeSxLBe0QAAAAAcABpUEm1AKAUAoDBF6AqW8Hs7wWJuyp4Eh/HFYAn9pPdPyB71VKmMjZTrrqu+V6nKt59zMVgTmcZ4uUqA5R/nHFD66a8TWSypx9j3tL8Rhbtw/JkDitpSECNpGK8SpbSwNwD2vrbrY1zXHG5ounBtbep69n4jTiOnC/Hj/fauZojknoJL34/lHk+f8/lWdo5PRsq0WPjYaLKCnC33gGa1upIA/wDcqxTaUZ/0v9O5TfvD2+x0L04V7Gcnnj6VIKijhtsNl4JGFf1yX+jr8qo5tNKWKHnuy3fSrzMPWgMUBm1ALUBF7zbV+y4aSYakWCAjQseFwCL8za/I1xOXTHJ3VDqkkzbZOz0xCK77QnDsASIvBWMEi9lVo2JHck3riO/czW22Re0Vg+m1oMVg0MrFcVh11dlGSWNebMourAcSwtbpa5HTclvyKtRGb6ZbP9D5YbbEEoCscucaJIMuZSNcubyuCDyJorYvnY0yre/c5fv7uUMPJ48QLQtey8lf8hbmOl+NrHvYeTqKeh5XH2IabazYqGOF2AeNj4bOSMobR1J5KSFPYr0OkZwVJ9aUW/qXPcH2TyTsJsd5YBqkat5pe5Ye6npqew1M9REq+l4zk7jhMKkSLHGioiiyqoAVQOQA0FQD7UAoBQCgFAKAUAoDV0BBBAIIsQRoQeIIoDj/ALQ/ZflzYnALp70kA104loR/yfLkKqlX5HoabVtPE39TmmBxfA3PU2rNKJ7ddmSx4DEcL5tBc/68PWs04lxJSR+IgW7KwPiK1vdddVbh66+h5VxF4bzwcNFt3e26J7rIckwAzxHkRxdL8UOnDhz5E3aZxpn8zwnx5fX1PPsqcX+5OMwAv+GvUbSWSor+7Gw3hknnmYM8rnLYk2Qtm5gam405ACqqlzJ9y6y1OKiuxYbfKrikWoDFCTa1DnItQZKtv9h3lijjSB5PNnzDULlUizDuCbemlzpVNybWEjTpXFSzJ4KRgjiIrFGFuQBNvgaxqTPSnRGS8ydg37xMKEFC+hHEFdRbXnaro2NHnXaCD4PPsjeYJhY8G0Su4IiXxbFPM1gXUi+l/wBKmNm3Tg7sp6fnyWg7vARFVxubMLMhiBh15CMvcD0arYwxwzy7dVJ7SgsfqRG5XsuD4o4jFZGgQ/dqCSJm/bBHur01zHQkgG9vuefJRzsdmAoQZoBQCgFAKAUAoBQCgFAKA5F7WdxAM+Pwq2/FiY1HEcTKo6/mHP3uN71Th3R6Gk1Li+iRzfZ+K7tqbD0+VZJxPdhPJY8LiL31bXyjTlzHD1rNKJ2z2YnDrKNcwYEBHA8y210Itzvp9K5jNx2fBBL7qbRmzeBiDcXBjY6Z/wAWmmvC/wDUVdXLDUE/lf6f4Ml9aW8S5W+VesY8gD5UGRagyYoTkzQCgFAQ+2NlYezStFITfhCrs7E/sIDc9yO5IFVTrg92drVTpjyVGfbCYaRcuzZkYnR8TmFrc1Fit/QiuV4cd0Z7NfbZsfPbWKGOjJeNVmi83lv54zYEg8bqbceRJHMCrxFasrlGzT2dMumfc8+6ODxWKxUcCucnvStzWNbX+J0Ud2vyNdV5bONb0wjlo75DEqKFUWVRYDoBWk8I3oBQCgFAKAUAoBQCgFAKAUBhhfQ0B+d/aRux/wBnYu8YIw8t3htwQ380fwJBHYjoaz2Qwe1otR1Rw+URuz8Vw1bT6/L+71lnE9aLyiwYOfhxNuR4Ek3P6VmnE5knjYbQxJUwS843GoCrmXXUqpsCVGtrDU2AvaprWepHNcH0OMt2dO78q9pPKyeYB+lSBQGKA2tQjItQZNZGABPADr/Oq7J9EXIjODmm8m9GKeR40kkgjUlcqEo7W/E7jzfuggC/M61zVB4zLkwXTbkeDYO0XM6mZpZwqmyvKzXAIdxdibgor6cNe1cX1xcW8cCmT6sJ8nr3paLCypPh3+7e7RXuSCNGQjiRZh8GtWWqMlLMDVKzCxLk6d7NdlJHhhiAmV8SBIR0S3kA7alv3q3wSxkyX3SsaTeyLfXZQKAUAoBQCgFAKAUAoBQCgFAKArPtF3e+3YGWMC8ifew9fEQEgfvC6/vVzJZRbTZ4c0z85YKfh8+J41kkj6SqZatgYOfEaQxlgNC5JEYPUuefYXPauFS5cHc7oR5Zetm7pRrZp7TMOAy2iUnov4vVr+grTXp4wMc9TJ7R2LHb5VoM+Rb5UGRagyYtQkzQgUIPljoc8UwA18J7DmTkNhVGoWYHM3jBzrfOIJi2cKGWVVex6EZdCNQbre461a11LZmO9dM9yCimCupCgAHXmSDobsexPCw7VCi+7Kc77Hom2K0pweCJNziGh7hAwDt8F1+FUUr5pMtt2SR+iIowqhVFgAAAOAAFgK0mc3oBQCgFAKAUAoBQCgFAKAUAoBQCgOG74bGjw+JxKqCNTKvSz+awuOFyR8K829Ylg9rRaqbcV9Dw4fFSxhQkrAW0CsQB8AbdPnVPVKPDPdjGE+Y/oTWz9qYgnWRyNb8+R6g866jfZnlnFunqUc9KJx9pOozeI1tbZouJHLgAOnwq93yS5/QxxoUpY6V9H/2TGDkLIjEcQCbVtrk5RTZitiozcV2PtXZwYoDagFCDZGINxyqGsohrKwyn7f2BPiHIREVI8xQlwBkNjlueBBBsOh9Kzxc6/layuxnvhlLPJS9oYZIb+NIgt+FWDOewC8PU1Dvc9oJ/UpVajvJk/wCyx0xe0I5cpvCkjC5vYnyA+pEpv6V1XBxeCJyjKOe526rygUAoCt7b3xhgk8BFfEYg/wCyiFyP854L+p7VTO6MX0rdno6b4bbbDxZNRh/VL9vMjMZt7bC5Cuz47NfyeJmZbW95gQo41w7Lv6TTXpPhzync9u+ML6cslN4NuTRRQIka/bMRZI4ycyo1gZGYjiqdfSu5zaSS5Zl0ulrsnOUn/Lhu35rsvdlggVgqhjmYABja1zbU25XPKrUYJNNvHBvUkCgFAfOeZUUs7BVGpZiAAOpJ0FG8Exi5PCWWbg3oQZoBQCgFAch9tGAX7VhZScpeNoybX0jYMP8A7KzaiKbWT1vhs2lJJZK1g8OiAHOH4Ajha/Prb++l8U4RW+Uz3KrZy26Wv94JPDwyICwYWHGzemn61HhySydO6E2otfoemaTEMLNmYDqQTxt68f8AWpcbGtziE9PGXy4TLvhFsiX/ACgH5C9erBYijyLHmTPraujkxQGaggWoARQGJIwwIIBU6EHgQeII6WoPQ4Rvtu82AmKgHwWJMLcrfkJ/MvfiNetoZ51lXQy4f/zuM2IxrdI41/idyf8AhFEVM7nUkCgMGgOabCjxmyjKJMCcSHcs2IhN5HB/Mup7204njxrHDrqzmOfVH0mplpviCi429DSx0y4Xs+C57v7zYfGI7RsVKf4iOMrx8feHwOoNtDWiFsZrY8bVaG3TSSmueGt0/Yojb3qMRJi1iM8rlYcPHfKscJayliR/iSsCwUC+UX0FZvG+bqxl8L/fU9xfDW6lQ5dMVmUn5vG+PSK2z5lz2lvIyy/Z8PCZ8QAGkUOFjiB/8yQiwPQWua0Ss36YrLPHp0ScPFtl0w4Txlv2RHS78L9g+1ZBHI7GKNWYFfEGhbMOKLqSf2T2rjx10dRoXwqX8V4OcpLLa8vbzfBpunt4KwwrRygCE4lp5TYuC5zSFDqiscxAJBsBpSuzD6fTOSdbpG4+Mmt5dPSu23Ge+O/r3IqLfL7yXGiKWdbrBGqtlSKMsLXvo0shs2UAkDKCRVau3c8Z7f76mqXwx9MdO5KL3k88t4/SK4y+XnGSdx204sXiZ8FLBmggUSTyM5ChhZ0Fl4jidT+E6aa2uanJwa2XJhros09MNRCWJSbUUlvjhkUPaQWS8GEMmaXwoxnygg6IDce+dTkF7CxJ1qv+JyvlXc1/8IoyxbZjEcvb8/p6vl8Fi2rvOsbmGKMzzquZ0VgqRLa95ZW8qC3x7a1dK3Dwt2edToXOPiTfTF8Pu/Zcv7GNz94JcajyNCscYbIjBy3iEXDEXVfLe1j69KiqxzWcE/ENHDSyUFLLxlrGMeS5e5YauMAoDnXtmgLRYVlBJEpAsCeKE8u6is+oXyno/DpJTefIo4woQZsROsR0GUK0jDnqqcKwdEpvZHrfx9dS2WV5krhYI2imlikGMKqGMUYZJgNbu0TFWKjtc9BWmqhLPiIw6n4pOWPC2x9TOA+zHB+LFOskzFfKre6CwuGW1wct6m2uEF8vJZotVffYlZvHffBfALVtwVPcWoQYoSbVJB88TMER3I0VSxA42AubX9KhvCydRWWo+ZXIt6ZJReLCvl5MzEKbdDlsfnWJ6xdkapaaFe05ojJ97sSSbRotuPlY27XLWqt6ux8JGqGjpaT6mzwY7bM06lZCrKfwlEsfgRXH8RY+5a9HSluvzLb7LWtLOtmAyLa500Y6ZQdDZlv/AC4DZQ285Pn9fFRxjH0OjVoPNFAQ+82NxUMaPhoBOQ48RL2YplPu982XkfTpXZKSWYrJr0dVFk3G6fTts/X1IGTebacoywbMZGP4pnAVe+Xy3+dVeLY/wx/M3LQ6KG9t6a8orcjp918YkU138TF45hHNIotFDEBduWunl5XuAOFzz4U0n5y59DRH4hp5WQwsV1JuK7yfb9dzWfYr4PFYZIMJJPFDEXjK2yvinOUvM50FlAtfhpao6HCSUVlL7+pMdVHU0WStsUZSaT9ILfEV7/n3GycFjmhfD+C2HaV3fG4pyNQWNxCAbny6A8AL9b0iptdOMZ5f9hqLdLGxWqXWopKEF/8AX17dyOwyNLNHLFgpZ8NCpiwCCwiJRrNLMzHS7C9yNbdq5W7TUcpcf3ZonJV1yhO1RnLex7534jH6cn023hZ/vMP558TNlnx7Qi5SEEBIIgfodT3BpNS/Dy3u8eXkc6ayra7aMI5jWpd5d5S/3YnNl7FmkCSHDiCHDKWweFJGZpQpyyzHrfhzuSfW2MG98YS4X9zFfqq4NxU+qU/xz8l5RIXZuzMZPhxhBBND40hfHYiUBWY3uQi3uQbAX4H0JqqMJyj04xnlmy2/T03O/rUulYriu3ln7knidnSYXFqIMHJIkUGTB5cvhLI9/Fkldjox0HU1Y4uEvljwtjNC6F9DdtqTlLM+ctLhJLsVTaZnjw8WGlD4fx3zTfixGIctd3YLwW/lVeLG3K9qJZUVF7Z/Nnq0eFO6V1eJdC+XtGK7Lfv3b7HTt1IsQqWkiSCEKqwQjWRVHOV+GY6aD61srUsbrC7I+Z1sqnLMZOUt3KXZv0XkT1WmIUBUPaLLaOBQbFpDr+UBDmYd7aX5Eiq7N8LzLqVlnJ9q4wYhyE0jjU+Go56jMfU6m/YV08QwTOTm/YjdnzSJNE8LZZVYFGvoDzzH8tr37XqZYxuVoltpbOeDEeOwCSSATlQPJcsTfINLMVzWP5uVee72l0tZN9VeG5wlg6phJCyIzAAsoJHQkAkdedekWp5R9aAxQkzQg1ljzKw5EW+YtUNZRKeGjnmA2q8eHEQQMVJBObW1yxGUKTppXi9DZ6N+njOzrzjJFZppXchLBj5hbQEAC1zz510oSxsjVF1VRim/Y9H2c2sPKR71yOYuD8hUxrecHUr1057Pgn/ZvMY9oBXbWSFlAvzBV7fAI1bKE4yw2eJ8QanV1RXc67Ws8UUAoBQCgFAQO9+EnnjTDxXVJnyTyC10iAJa3drZfjVVqcl0rvybtDZXVN2z5isxXm+35ckk0fgQFYY7+HGRHGNL5V8qAnrYCu8dMdjNnxbM2Pl7v35ZG7o7HeCJnm82InbxZ2/aPBB2UaAetcVQcVl8vk0a7URtmo1/gjtFfv7vknqtMQoD4Y+R1ikaNc7hGKLwzMFJVb9zYfGolnGx3XGMppSeFlZfkipbj7tyKzY3G3bFSXsG/wBkvCwHIkfIWHW9FNb/ABz5PW+Ja2DS0+n2rj/7PzZdK0HjCgFAc29riSOYljI8kbs6/iKuyC49AjfOq5vEk+xbDPSzl0dxqDY9RVjSfJxwSmAgkZkGUFpRqxHuw38zE9WIsCeQPI1l1EkouJopi+pSJPa21IsbjFRTnAKQ6D3lDAOV7XZrdgDVHhSU03xsaK5xcXFcnSa9ItFAYoSbUORQHL9ryzQyyIGsviNYAC4uzW/Q/rXlzlODaXmezXXValJrfCPNh5GTVs9mudCQCeth9fSquqXdl7hF7RS2NWZlGY8GB+Irgs2e3kb7L2usM2FlA80cmaQ2F8l8pA5+4T86302QUV5nz+t0uolZJ5+X3P0ADeth4pmgFAKAUAoBQCgFAKAUAoBQCgFAKA/Pvtc24x2iPDcqYlspHqVPqLo2neuZJSWGWPMcYInZm1xM6RvChZjYsrFR3YjUcNdKzuqUVtPCLYzUnhx3JzbWNlKyKBlRhYtYs7gEAIzH3Fy62Gmlta5p6Hv39Tu6M47diS9m+xvMcQw4aL62/qf92r0uqfovudaeO2ToNXGgUBihJtUECgK9j90oZpnmZ3BYg5Vy2BsAbXB6frWaemjKXU2bK9bOuCgkj6x7qYUcVZv8zt/y2qVpa12Iettff9DXGNs/DaOsWYcECZ5P4bEgd+FS41Q7I5Ur7OGyobw7zOQRBAEHV7X+CIbD4n4Vx/ER4iS9K3+JnRfZbvAcXglDm80J8KTle3uNbutviGrRCWUePqavDnjsXCujOKAUAoBQCgFAKAUAoBQCgFAKAjtv7RGHgd7jN7qDq590d+voDQ6hHqeDie9e5k2KyzwEGRUysjGxcAlgVY6ZrseNr341DNU6m90V3dHBumIlSZGjkRPdZSCLnjY+g171Re/kGnj/ADN+xd8BgmnfIlwo99uIQH1/EeQ+PAVnqq63nsbJy7LkvWDwqRIqIoVV4D9db8bnnW9JLg5SxsfapAoDFCTNCBQA0AoDmuNgJx+LAUFiQwFtSLA2FyBqSOY5CvIvk+fV/c9SElGlPyR4doYXkbDT8SlWta9yrG6k34HhXEJExl1xyfLcrb52djFkP+DJ5JgOSX0e3VSb+hYc63VTwYdXR4kduex+g0cEAgggi4I4EHgQa2HhG1AKAUAoBQCgFAKAUAoBQCgFAc729tfDY+ZsMSHijbLe/GQaF1YagqdAR0PWuOpPY0KqyCU0R+zMVNhpZoJQZkhK/eKLyeG65kcoPeFtDbUEHS1cKUovHKPRr6bIKS2f6ZJybCYbFKkhCSD8DqSDY8QGQg20FxfpVnyyXmcShh4fJ68PAka5UVVUcFUWGvE2FdEJY2PrQkUAoDFAZoBQCgFGwUXfON43GJiW6nyy6akLe3+W12uQOY5CvKsS623xLj3N2mksdLI0MrqCrAq2guLWC8Qeh/pVDTi9zWQe1cJmuQAb8Ldqvrlg4lHJdPZTvrkK4DEmy3y4ZydP/RJ/4f4elb6p52Z4ut0zT64r3OuVceaKAUAoBQCgFAKAUAoBQCgOZ+2Dfz7JH9lgJ8eQfeOP9lGeNj+dhe3Tj0uHBzTd7BTSDNhgxYWvlW668CeQv/I9KzThJPY9/T3V21Zk9+5O4fa2L2bJJJioyzSqLljoco8uVluNL2K1HVKD3LlVVKHysuWy9g4uT/xMWIwyyOMzwrG4jJ4+Z8xuf2gl67UW31JmCeqjD5JQePPO/wBiTw+OOcwzIYZwM2Q2IZR+ONhoy+movqBVql2YTjJZhuvt7ntroCgFAYtQG1CBQA0BWdo7ekbHRYSFVI4zkjgLXNrHSwtr1IFUzfVLpRpjUlU5y+hY2hUrlsLcLenCu5VxlHpa2M6bTKPvHskYYtNCPu9PHjA8oVjYSpyUg8Rwsb6DNXmTgozdec+Xp6G6m5vEZfQicZAGBICsNApHA3AII48QRVSeHhmpFX2pgrX0On1/v61qhM4nA6H7O/aYFC4XHvYiyx4hjoeQWUnn+2ePPXU7IT8zxNVpHF9UDrgN9RVp55mgFAKAUAoBQCgFAKA5vv57UIsK/wBmw1pZr2lYHyRDmL8GftwHPoZSyG8cle27u19tw/iRkPJl8RCT/ihhmtm6k2IJ79ag1zq645iUr2fbxthMXlkGWJ/I6290X0bXW6kknsW00FDPTZ0SOp7+4DxsMDxCOGPoQVvp/mBvVVy+XJ7ekklZh9ym7I3gmwbAEkpwB6djWaM2jZfpIz2aLhtzejD4nB5ywWeJlkgbTN4gI8o7MLqexJ5Ve7E4nlV6WdVyxw9n7FjhkDKrj8QDDTqL8D9KvTyS1h4N6ECgMWoSZoQKAzQFM3CQSS4zENq5kCeg9829cy/wiqat8s16p46YLhIudXGQ8+OgV0ZWAIIKtp+E6Nr6XrHq6YODnjdb/kdRbT2OY7MN4gGsxiLRnkSQbg/qw+ArFZyn5nrr77nnx+G5ENpq2vPlz/u1TCR0itY7DanQ9T6nhWmMiudeSe3L3+xmBZIRfEQE2ETE5l6+EwuR6ajTgONaIzweVqNJGTytmd22RvBBiFUq2VmAOR7BtRfTkfgTVsZKSyeXODhJpkrXRwKAUAoBQCgIrbe8OHwilpXsfyqMzm/Dyjh6mw71zKSiss7hXKbwjju83tOxWKnOGjU4aG+U6/evfgWce6puNF+JPCuZ/NU3E6r+S5Rl5kBvFsHLHFikGl8kvz8jfy/hqjR3J/I/oX6+jpfWvqWj2Wbwixwch1FzATzHEx+o1YdrjlWvqy2vI6qThGKfD4f3R8faDuUzy/aYAAD5pLcQ3UDnm+pPUVzOXSsnEtK52fL3LPuLjhNhBE480Y8NlbW6G4X4W8tv2fSq6blamb50OnCTz6nj2vuYWB8JlKn8Lkgj0YA3+Nj3NVy0/wDSbatfhYmvqRW526CyFMRKLZWI8NkIZivAtfQC9ut+FKqs7sanUJNxivqdIvzrUeaYoBQChJmhAoBQFGxDy7MxMkgjMmGmNyBxU3JGW+gIuRY2BAGosaoy636GzpV8Vh7omIN9sC2vjFT0aNxb42t8jXatj5lL09i2wS642J0DK4ZWGhGoIPMH40lODWGyvpaeMHPDs2SDEyoynw5CZFa2hbMT/NuHVeteTLaPR3X27M9OFilFGuNwpXRltqeutjYWtxB0seB141xCQqs687EPFsaXEy+FCoZuLsbhUB5s3LsOJ6Vtpi5cHdlsYLLLiNgQbOh8gEuIk8gZha5Iu1gPdjAFzbU2AvcitUsVxPN6nZLMuEaQ48CIpLH4eRAPEDXj5LfNxHEHUfO1ZJXOCUVy9kU2U9cupdyw7Mx8qovhT5lsLXIZT6Xvp6GtcZmKdTT4PbBvViCubwo5BfSzMlwOeoapVmVmO5z4azhnzxPtBWIL4uGkViCSFZDYA24m3H+ddde2WWQ0rm30sjpfa1AOGGmJ7lB9Ca5dyRoj8MsfdHkm9qOIf/CwqJ0LyM3zVQv1rl3eSLF8NS/FIhsfvFtLECzTlFPFYhkH8Q8/+9VUrJM016SmL4z7np2fs8y4WQNqyg68zbzD6WqyP8ytplF1arsyvf8AuVfejYn3EeKT3kbJJb8ptlb4E2/e7VTord/DZn+I04/mR/3yLNsmWOfByq9gjR5z2BS5/hIrLiVd2F2Ztm420dUuGiq7m4GPFK2HJ8LFR/e4eQaZluCyMRzVvMDxGbS4BFevZDfqjyedork4eFZuvt6r1OjbvbZM2bDYlcmJQWZTwkX86/Djb1Gh0hNSX3RpcZVtJ/R+f+fNHp2ZsbwZnZSMjDQfiubX9BpWSnSyqtck9jRZcpwS7kwa2mcHrQCgFAKAxahJmhAoATQGHUEEHW/EEXB9aYCeOCLxG7eDfVoEJ+I+hrnw4+RatRYu5I4aBI1VI1CquiqBYAdqKEV2K5NyeWePbWyIsVHkkHdWHvKeRBriylT3WzO6rZVvKKphd08UZCkkiCIa+IoGd78gp4N3IPxrPHSZe5tlq4dOUty44HBRYeMJGAiC5P8ANmY6k9Sa2KKisIwSk5vLKZi8f48rS/h92IdEvx9WPm9Mo5VjnLqeS1rpXSerBSrqG0BFr9DyNuf9apsp63Fp4a4KpNpbGrbHVDnSQRE6kxuvm9Y9Qx05rfuKTlZFYUd/dYIjapbfdG8G2poysbRI6O6xo6kgpnfKpZDxAuLkNr0Fd1QcIKCZPhQk8s8W+0GSRdSboNTxOpB+lX2LoSRv0FannbuVrAYPO16oW56VkVFFu2bscG2lWpHmWzwTS7HAHCpcDOrj37JwmRW7kfoP6iraY4TKrp9U17FVlEaRYuGT3AHHqNVFu/u27157hKOoxHnJZY4vT5nxjH5FIw07Lh0VmsLWIHPzE69fThXrxogpufdngS1Nkq1V2X6kK+OaGdJ4TZ42zKeV+YPYgkHsTXb3OYScXlHa9nHD7Qiw2MynMtnSxIZWUlWRiLXAYHTgbdDVXTvk9eM+uCxxz9SdqTsXqAL0AvQC9AKAVIM1BAoAaAUA+tAKACgFAQ2+CynCSrCCWYBTp+EkZ9OfluPjVN7areDXolB3LxOP9wc2h2s6G0yH/MB9RWGNh6t3wyMt6n9GTGFxqOLqwP8AfMVapJnlW6eyp4mj0iWuinB6tjL4mKhXWyBpj08oyKD+9ID+5XdSzIPZE3vbsc4iLyC7pcqOGYHivrzHcd6ush1It0mo8GzMuHz/AHKdsTCm9rEEGxBGoPMEdayxievfNNZRf9j4YC160RieFfMsDRJl0terMGBSlkj2twHD6nr/AHyqUsGmKfJx/enaCmeZidPEYKOVgStwO9uPerYwjH5u7PLvulOXTnZcFMxmOZgB0FvW1S2VJE9uvuTisZZivhQ85HGpHPIvFj8h3rjrXY2V6OT3nt9/8HZtj7Mjw0KQxAhEGl9SSTdmJ6kkn41yboxUVhHtoSDQD60Av86ACgFAYoSZoQKAGgH1oB9aAUAFAKAUBHbS2HBP76C/5hof6/GqLNPCe/D9DTTq7auHt5FN2ruE6kvA1/TRv61knprI8br9T1qfikJrptX7ogJJ8TAcsqFrdRZqrVmNmWy0enuXVB49uC77hwlkkxBBUSZUQH8qFrn4sx/hFb6OMniaqrwp9Gc4LX9KvMx5cRs+J2zFbNwzLo1u/I/EGocU+TqM5xWIv6djddoJBHMUTMYoxITmBJAJzXIF72H/AErPO5Rn047ZM1kJSeXLlmYtoO5ZXVgVdl8qtlIDHKb89Ldqspm5Ry/ULw4H2Bq0vOLb6bn4uKa8SPPE7HwyilitzfI4HC3DNwNuN9K76ljc8+emn1/Lvkk92PZnKxV8W3hrx8ND94excaKPS59K4cs9i+vS9Dy3v6f3OpYeBY0VEAVVUKqjgANAB2tQ08cH0oBQA0A+tAL/ADoB9aACgMUJNqEChANCR9aAfWhA+tCRQgUJFCBQkUB8sThUkFnRWH7QBriVcZ/iWTuFk4PMXg3jjCgKosoAAAFgAOAsK6SS2Rw228vk2+lSQfLF3yNa/X4c/wBL0ZxZnpeOTz/ZWHuJbubD/irjHcwLqZ832XI3vSKPizH5AW/WpwdKib7Ek36V0b4ppJGKHQoBQChAoSDQD60IH1oBQAUBihJtQCgBoQPrQkfWhA+tAKEigFAKAUAoBQD6UIH0oBQChIoBQCgFAKAUIBoB9aAfWgFCQKAxQGTQA0ANCAaDsKDsBQMChIFAwKEMChIFCBQkUAoBQCgFCBQkUANADQA0IQNAgaAUA50HYCgAoSzFAf/Z" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
          <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="w-full h-auto object-cover rounded-md" />
          <img src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" className="w-full h-auto object-cover rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Home;
