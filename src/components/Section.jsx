import React from 'react'

const Section = () => {
  return (
    <section className='bg-blue'>
      <div className="container">
        <ul className="row">
          <li className='col-20 d-flex t-white align-center'><img src="/img/buy-comics-digital-comics.png" alt="" className='shop-img' /> <span>DIGITAL COMICS</span></li>

          <li className='col-20 d-flex t-white align-center'><img src="/img/buy-comics-merchandise.png" alt="" className='shop-img' /> <span>DC MERCHANDISE</span></li>

          <li className='col-20 d-flex t-white align-center'><img src="/img/buy-comics-subscriptions.png" alt="" className='shop-img' /> <span>SUBSCRIPTIONS</span></li>

          <li className='col-20 d-flex t-white align-center'><img src="/img/buy-comics-shop-locator.png" alt="" className='shop-img' /> <span>COMIC SHOP LOCATOR</span></li>

          <li className='col-20 d-flex t-white align-center'><img src="/img/buy-dc-power-visa.svg" alt="" className='shop-img' id='svg' /><span>DC POWER VISA</span></li>

        </ul>
      </div>

    </section>
  )
}

export default Section
