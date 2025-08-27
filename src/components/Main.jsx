import ComicsCard from "./ComicsCard";
const Main = ({ comics }) => {
  return (
    <main className="bg-dark ">
      <div className="container t-white position-relative ">
        <span id="main-label">current series</span>
        <div className="py-50">
          <div className="row g-15">
            {comics.map((elem) => {
              const { id, thumb, series } = elem
              return (<div key={id} className="col-16">
                <ComicsCard id={id} thumb={thumb} series={series} />
              </div>
              )
            })}
            <div className="col-100 d-flex justify-center">
              <button className="btn">Load more</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main