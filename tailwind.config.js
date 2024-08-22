/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
    //  Add new rules 
    colors : {
      primary : '#FF6363' ,
      secondary : {
        100 : '#E2E2D5',
        200 : '#888883'
      } ,
      s : {
          100 :'#6482AD' ,
          200 :'#7FA1C3'
        }
    }
    },
  },
  plugins: [],
}

