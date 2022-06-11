import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const divBadgeStyles = {
    top: '0.5rem',
    right: '0.5rem'
}

export default function ItemListContainer(props) {
  return (
    <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">Fancy Product</h5>
                                {/* <!-- Product price--> */}
                                $40.00 - $80.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <ItemCount stock={5} initial={0}/>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Sale badge--> */}
                        <div class="badge bg-dark text-white position-absolute" style={divBadgeStyles}>Sale</div>
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">Special Item</h5>
                                {/* <!-- Product reviews--> */}
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                <span class="text-muted text-decoration-line-through">$20.00</span>
                                $18.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <ItemCount stock={5} initial={0}/>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Sale badge--> */}
                        <div class="badge bg-dark text-white position-absolute" style={divBadgeStyles}>Sale</div>
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">Sale Item</h5>
                                {/* <!-- Product price--> */}
                                <span class="text-muted text-decoration-line-through">$50.00</span>
                                $25.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <ItemCount stock={5} initial={0}/>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">Popular Item</h5>
                                {/* <!-- Product reviews--> */}
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                $40.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <ItemCount stock={2} initial={1}/>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Sale badge--> */}
                        <div class="badge bg-dark text-white position-absolute" style={divBadgeStyles}>Sale</div>
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">Sale Item</h5>
                                {/* <!-- Product price--> */}
                                <span class="text-muted text-decoration-line-through">$50.00</span>
                                $25.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <ItemCount stock={3} initial={2}/>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">Fancy Product</h5>
                                {/* <!-- Product price--> */}
                                $120.00 - $280.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <ItemCount stock={5} initial={0}/>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Sale badge--> */}
                        <div class="badge bg-dark text-white position-absolute" style={divBadgeStyles}>Sale</div>
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">Special Item</h5>
                                {/* <!-- Product reviews--> */}
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                <span class="text-muted text-decoration-line-through">$20.00</span>
                                $18.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <ItemCount stock={5} initial={0}/>
                    </div>
                </div>
                <div class="col mb-5">
                    <div class="card h-100">
                        {/* <!-- Product image--> */}
                        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        {/* <!-- Product details--> */}
                        <div class="card-body p-4">
                            <div class="text-center">
                                {/* <!-- Product name--> */}
                                <h5 class="fw-bolder">Popular Item</h5>
                                {/* <!-- Product reviews--> */}
                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                {/* <!-- Product price--> */}
                                $40.00
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <ItemCount stock={5} initial={0}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
