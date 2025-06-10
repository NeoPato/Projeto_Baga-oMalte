const Card = (props) => {
  return(
      <div class="card">
          <img src={props.img} alt={props.nome} width={150} height={"auto"}/>
          <h4>{props.nome}</h4>
          <p>{props.email}</p>
          <p>{props.github}</p>
          
      </div>
  )
}