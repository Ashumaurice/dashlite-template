import React, { useState } from 'react';

const Content = () => {

    const [currencies, setCurrencies] = useState([
        { currencyImage: "./images/dai.svg", currencyName: 'DAI', product: 'Instant Access', apy: 6.43, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 DAI', id: 1 },
        { currencyImage: "./images/busd.svg", currencyName: 'BUSD', provider: 'Aave', apy: 1.77, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 BUSD', id: 2 },
        { currencyImage: "./images/usdc.svg", currencyName: 'USDC', product: 'Instant Access', apy: 7.99, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 USDC', id: 3 },
        { currencyImage: "./images/usdt.svg", currencyName: 'USDT', product: 'Instant Access', apy: 7.99, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 USDT', id: 4 },
        { currencyImage: "./images/feiUSD.svg", currencyName: 'FEI', provider: 'Compound', apy: 0, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 FEI', id: 5 },
        { currencyImage: "./images/paxDollar.png", currencyName: 'USDP', product: 'Instant Access', apy: 7.99, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 USDP', id: 6 },
        { currencyImage: "./images/terraUSD.png", currencyName: 'UST', product: 'Instant Access', apy: 7.99, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 UST', id: 7 }
    ]);

    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="nk-block-head nk-block-head-sm">
                            <div className="nk-block-between">
                                <div className="nk-block-head-content">
                                    <h3 className="fs-18px">Earn and Impact</h3>
                                    <p className="nk-block-title">Earn interest and climate rewards by deposit your assets.</p><br />
                                </div>
                            </div>
                        </div>
                        <div className="product-preview">
                            {
                                <div className="nk-block">

                                    <div className="nk-tb-list mb-3">
                                        <div className="nk-tb-item nk-tb-head">
                                            <div className="nk-tb-col">
                                            </div>
                                            <div className="nk-tb-col"><span>Currency</span></div>
                                            <div className="nk-tb-col"><span>Min Amount</span></div>
                                            <div className="nk-tb-col"><span>Max Amount</span></div>
                                            <div className="nk-tb-col"><span>Fee</span></div>
                                            <div className="nk-tb-col"><span></span></div>
                                            <div className="nk-tb-col d-xl-none"><span></span></div>
                                        </div>
                                        {currencies.map((currency) => (
                                            <div className="nk-tb-item" key={currency.id}>
                                                <div className="nk-tb-col nk-tb-col-check">
                                                </div>
                                                <div className="nk-tb-col d-none d-sm-block">
                                                    <span className="tb-product">
                                                        <img src={currency.currencyImage} alt="" className="thumb"></img>
                                                        <span className="title">{currency.currencyName}</span>
                                                    </span>
                                                </div>
                                                <div className="nk-tb-col d-xl-none">
                                                    <span className="tb-product">
                                                        <span className="title">{currency.currencyName}</span>
                                                    </span>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <span className="tb-lead">{currency.apy}%</span>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <span className="tb-lead">{currency.term}</span>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <span className="tb-sub">N/A</span>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <a href="https://forms.gle/ZSzoaCz3w9X1zKuz9"
                                                        className="btn btn-primary d-none d-sm-block text-dark">
                                                        <span>Pay now</span></a>
                                                </div>
                                                <div className="nk-tb-col d-xl-none">
                                                    <a href="https://forms.gle/ZSzoaCz3w9X1zKuz9"
                                                        className="btn btn-primary d-sm-block text-dark">
                                                        <span>Pay now</span></a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Content;