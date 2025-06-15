

// export default function CoreConcept(props){ //can do it using this also
export default function CoreConcept({image,title,description}){
  return(
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
