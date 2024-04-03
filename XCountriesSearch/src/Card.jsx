import './Card.css';
const Card = ({data}) => {
  return (
    <div className="countryCard">
        <div className="flag">
            <img src={data.flags.png} alt={data.flag.common}/>
        </div>
        <div className="cname">{data.name.common}</div>
    </div>
  )
}

export default Card;