import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { fetchConsumption } from '../../redux/graphs/actions'

function ConsumptionPageUI(props) {
    useEffect(() => {
        props.fetchConsumption();
    }, [])

    return (
        <div className="consumption-page">
            <h1 className="text-center mt-5">Energie Consumption</h1>
            <h1>{props.text}</h1>
            <div className="d-flex flex-row">
                <div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">V1</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">V2</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">V3</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                </div>
                <div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">A1</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">A2</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">A3</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                </div>
                <div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">W1</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">W2</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                    <div className="w-75 border mx-auto my-5">
                        <h3 className="text-center my-3">W3</h3>
                        <img class="w-100" src="https://ec.europa.eu/eurostat/statistics-explained/images/9/94/House_price_indices-graph-sk.png" alt=""></img>
                    </div>
                </div>
            </div>
            <hr />

        </div>
    )
}

const mapStateToProps = (state) => ({
    text: state.graphs.text
})

const mapDispatchToProps = (dispatch) => ({
    fetchConsumption: () => dispatch(fetchConsumption())
})

export const ConsumptionPage = connect(mapStateToProps, mapDispatchToProps)(ConsumptionPageUI)