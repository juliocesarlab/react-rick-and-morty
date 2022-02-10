import { StyledCard } from './style.js'

export const Card = ({id, image, name, status, species, location}) => {
 return (
  <StyledCard key={id}>
    <div className="main">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </div>
    <div className="description">
      <p>Status: {status}</p>
      <p>Specie: {species}</p>
      <p>Last location: {location}</p>
    </div>
  </StyledCard>
 )
};
