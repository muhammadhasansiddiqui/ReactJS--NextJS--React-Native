function Project1(){

return(

    <div>

      
    
    {/* <img style={{width:"100px", height:"200px"}} className='logo' src="https://i.pinimg.com/originals/46/1b/c3/461bc3941474e17e43c4bc0c2e4c3af5.gif" alt="logoimg" /> */}
    <div className='mybox  flex flex-wrap justify-center gap-10  ' >
    
    {Cars.map((car) => (
      <div className='card' key={car.id}>
        <h2>{car.name}</h2>
        <img className='logo' src={car.LOGOimgUrl} alt={car.name} />
        <p>{car.model}</p>
        <img src={car.imgUrl} alt={car.name} />
      </div>
    ))}
    
    </div>
    
        </div>






)}

