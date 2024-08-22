function UserData( {name , capitalCity, img }) {
    return (
<div>


<div>

<h1 className="text-3xl font-bold underline"  > {name} </h1>
<h3>{capitalCity}</h3>

</div>
<img src ={img} />
</div>

    )
    }


    export default UserData