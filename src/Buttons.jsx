
const Button = ({onClick, text, primary=true})=>{
return (
      <button
        onClick={onClick}
        className={`w-32 py-2 ${primary? "bg-gradient-to-r from-blue-500 to-purple-500  text-white hover:to-purple-700":"text-gray-500 bg-gray-100 border-2 border-gray-300 hover:bg-gray-200"}  font-medium rounded-md`}
      >
        {text}
      </button>
   
  );


}


export default Button;