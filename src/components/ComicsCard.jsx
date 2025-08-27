const ComicsCard = ({ id, thumb, series }) => {
  return (
    <div className="card">
      <div className={[1, 12].includes(id) ? "card-top position-relative" : "card-top"}>
        <img src={thumb} alt={series} className={[1, 12].includes(id) ? "position-absolute top-25 scale" : ""} />
      </div>
      <div className="card-label">
        <span>{series}</span>
      </div>
    </div>
  )
}



export default ComicsCard
