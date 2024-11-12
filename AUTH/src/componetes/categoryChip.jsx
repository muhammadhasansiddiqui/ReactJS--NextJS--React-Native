const CategoryChip = ({ category , isChosen , onClick }) => {
// console.log("🚀 ~ CategoryChip ~ onClick:", onClick);

const { name } = category ;

    return (
      <div 
      onClick={onClick}
      className={`${ isChosen ? "bg-yellow-100 font-bold" : ' bg-white text-black' }p-2 px-4 rounded-md
      
        cursor-pointer
       hover:bg-yellow-100 hover:font-extrabold 
         border-l-teal-500`}>
        <h1>{ name }</h1>
      </div>
    );
  };
  
  export default CategoryChip;
  