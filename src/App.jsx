import React from 'react';


function HomeHeader(){
  return (
    <h1> Employee Directory </h1>
  )
}



function SearchBar(){
  
  return (
    <h3 style={{ backgroundColor: "white", borderRadius:'4px', color:'black', height:'30px', justifyContent:'center'}} > Search Bar</h3>
  )
}
function EmployeeListItems(){
  const myEmployees = [ 
    { name: 'Oluwaseye Oyadiran', title: 'President and Ceo', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F46905837-man-silhouette-art-illustration&psig=AOvVaw0MQXSjroXI3uOQ8lzdm1GK&ust=1733806420484000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj2tbDymYoDFQAAAAAdAAAAABAE' },
    { name: 'Julie Taylor', title: 'Vp of Marketing', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F46905837-man-silhouette-art-illustration&psig=AOvVaw0MQXSjroXI3uOQ8lzdm1GK&ust=1733806420484000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj2tbDymYoDFQAAAAAdAAAAABAE' },
    { name: 'Eugene Lee', title: 'CFO', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F46905837-man-silhouette-art-illustration&psig=AOvVaw0MQXSjroXI3uOQ8lzdm1GK&ust=1733806420484000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj2tbDymYoDFQAAAAAdAAAAABAE' },
    { name: 'John Williams', title: 'VP of Engineering', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F46905837-man-silhouette-art-illustration&psig=AOvVaw0MQXSjroXI3uOQ8lzdm1GK&ust=1733806420484000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj2tbDymYoDFQAAAAAdAAAAABAE' },
    { name: 'Ray Moore', title: 'Vp of Sales', img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F46905837-man-silhouette-art-illustration&psig=AOvVaw0MQXSjroXI3uOQ8lzdm1GK&ust=1733806420484000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNj2tbDymYoDFQAAAAAdAAAAABAE' },
  ]
  return (  
    <div style={{backgroundColor:'white', color:'black', border:'1px solid black', alignContent: 'center'}}>
    <ul   >
      {myEmployees.map(user => (
    <ul key={user.id} style={{border:'1px solid black'}}>
      <h2>{user.name}</h2>
      <p>{user.title}</p>
    </ul>
  ))}
    </ul>  

    </div>
       
     
)
}




function EmployeeList(){

  return ( 
    <div>
      <EmployeeListItems/>
    </div>
    
  )
}

function EmployeeHeader(){
return(
  <h1> Employee </h1>
  
)
}


function EmployeeCard() {
  return (
 <div style ={{ backgroundColor:'white', color:'black', margin:'20px', borderRadius: '10px'}}>
    <div> 
      <h1>Oluwaseye Oyadiran</h1>
      <p> President and Ceo </p>
    </div>
    <br></br>
    <div style={{ textAlign: 'left', border:'1px solid black'}}>
      <h2> Call Office </h2>
      <p> 513-578-0511</p>
    </div>
    <div style={{ textAlign: 'left', border:'1px solid black'}}>
      <h2> Call Mobile </h2>
      <p> 513-578-0511</p>
    </div>
    <div style={{ textAlign: 'left', border:'1px solid black'}}>
      <h2> Email </h2>
      <p> seyeoyadiran@gmail.com</p>
    </div>
 </div>
  );
}

function App() {
  return (
    //Home Page
    
    <div style={{ display: 'flex', height: '100vh', width:'100wh', textAlign: 'center', justifyContent:'center', }}>
      <div style={{ flex: 1, backgroundColor: 'blue', margin:'5px'}}>
        {/* Content for the left half */}
        <HomeHeader></HomeHeader>
        <SearchBar></SearchBar>
        <EmployeeList></EmployeeList>
        
      </div>
      {/* Employee Page  */}
      <div style={{ flex: 1, backgroundColor: 'purple', margin: '5px'}}>
        {/* Content for the right half */}
        <EmployeeHeader></EmployeeHeader>
        <EmployeeCard></EmployeeCard>
      </div>
    </div>
  );
}

export default App;