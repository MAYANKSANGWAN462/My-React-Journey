import coreimg from '../../assets/react-core-concepts.png'
import './Header.css'

const reactDescription = ["Fundamental","Crucial","Core"];

function getrandomint(n){
  return Math.floor(Math.random()*(n+1))
}



export default function Header(){
  const description = reactDescription[getrandomint(2)]
  return (
    <header>
        <img src={coreimg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}
