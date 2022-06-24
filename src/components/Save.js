import React, { useState } from 'react';

const Save = () => {

    const [currencies, setCurrencies] = useState([
        { currencyImage: "./images/busd.svg", currencyName: 'Binance USD', product: 'Instant Access', apy: 1.77, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 BUSD', id: 1 },
        { currencyImage: "./images/dai.svg", currencyName: 'DAI', product: 'Instant Access', apy: 6.43, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 DAI', id: 2 },
        // { currencyImage: "./images/eth.svg", currencyName: 'Ethereum', product: 'Instant Access', apy: 1.26, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 ETH', id: 3 },
        // { currencyImage: "./images/btc.png", currencyName: 'Bitcoin', product: 'Instant Access', apy: 1.01, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 BTC', id: 4 },
        // { currencyImage: "./images/aave.svg", currencyName: 'Aave', provider: 'Compound', apy: 1.59, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 Aave ', id: 5 },
        { currencyImage: "./images/usdc.svg", currencyName: 'USD Coin', product: 'Instant Access', apy: 7.99, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 USDC', id: 6 },
        // { currencyImage: "./images/mkr.svg", currencyName: 'Maker', provider: 'Compound', apy: 0.00, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 MKR', id: 7 },
        { currencyImage: "./images/usdt.svg", currencyName: 'USDT', product: 'Instant Access', apy: 7.99, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 USDT', id: 8 },
        // { currencyImage: "./images/feiUSD.svg", currencyName: 'Fei USD', provider: 'Compound', apy: 0, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 FEI', id: 9 },
        // { currencyImage: "./images/bnb.png", currencyName: 'BNB', product: 'Instant Access', apy: 1.95, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 COMP', id: 10 },
        // { currencyImage: "./images/uni.svg", currencyName: 'Uniswap', provider: 'Compound', apy: 0.28, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 UNI', id: 11 },
        // { currencyImage: "./images/frax.svg", currencyName: 'FRAX', provider: 'Aave', apy: 2.45, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 FRAX', id: 12 },
        { currencyImage: "./images/paxDollar.png", currencyName: 'Pax Dollar', product: 'Instant Access', apy: 7.99, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 USDP', id: 13 },
        { currencyImage: "./images/terraUSD.png", currencyName: 'Terra USD', product: 'Instant Access', apy: 7.99, interestType: 'Variable', term: 'Flexible', minimumDeposit: '100 UST', id: 14 }
    ]);
    
    return (
        <div className="nk-content ">
            <div className="container-fluid">
                <div className="nk-content-inner">
                    <div className="nk-content-body">
                        <div className="nk-block-head nk-block-head-sm">
                            <div className="nk-block-between">
                                <div className="nk-block-head-content">
                                    <div className="toggle-wrap nk-block-tools-toggle">
                                        <a href="/" className="btn btn-icon btn-trigger toggle-expand mr-n1"
                                            data-target="pageMenu"><em className="icon ni ni-more-v"></em></a>
                                        <div className="toggle-expand-content" data-content="pageMenu">
                                            <ul className="nk-block-tools g-3">
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-preview">
                            {
                                <div className="nk-block">

                                    <div className="nk-tb-list is-separate mb-3">
                                        <div className="nk-tb-item nk-tb-head">
                                            <div className="nk-tb-col">
                                            </div>
                                            <div className="nk-tb-col tb-col-sm"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coin</span></div>
                                            <div className="nk-tb-col"><span>Product</span></div>
                                            <div className="nk-tb-col"><span> Est. APY</span></div>
                                            <div className="nk-tb-col"><span>Duration</span></div>
                                            <div className="nk-tb-col"><span></span></div>
                                        </div>
                                        {currencies.map((currency) => (
                                            <div className="nk-tb-item" key={currency.id}>
                                                <div className="nk-tb-col nk-tb-col-check">
                                                </div>
                                                <div className="nk-tb-col tb-col-sm">
                                                    <span className="tb-product">
                                                        <img src={currency.currencyImage} alt="" className="thumb"></img>
                                                        <span className="title">{currency.currencyName}</span>
                                                    </span>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <span className="tb-sub">{currency.product}</span>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <span className="tb-lead">{currency.apy}%</span>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <span className="tb-lead">{currency.term}</span>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <a href="/" target="_blank"
                                                        className="toggle btn btn-primary d-none d-md-inline-flex">
                                                        <span>Deposit</span></a>
                                                </div>
                                                <div className="nk-tb-col">
                                                    <a href="/" target="_blank"
                                                        className="toggle btn btn-primary d-none d-md-inline-flex">
                                                        <span>Withdraw</span></a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="nk-add-product toggle-slide toggle-slide-right" data-content="addProduct"
                            data-toggle-screen="any" data-toggle-overlay="true" data-toggle-body="true" data-simplebar>
                            <div className="nk-block-head">
                                <div className="nk-block-head-content">
                                    <h5 className="nk-block-title">New Product</h5>
                                    <div className="nk-block-des">
                                        <p>Add information and add new product.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-block">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="product-title">Product Title</label>
                                            <div className="form-control-wrap">
                                                <input type="text" className="form-control" id="product-title"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-mb-6">
                                        <div className="form-group">
                                            <label className="form-label" for="regular-price">Regular Price</label>
                                            <div className="form-control-wrap">
                                                <input type="text" className="form-control" id="regular-price"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-mb-6">
                                        <div className="form-group">
                                            <label className="form-label" for="sale-price">Sale Price</label>
                                            <div className="form-control-wrap">
                                                <input type="text" className="form-control" id="sale-price"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-mb-6">
                                        <div className="form-group">
                                            <label className="form-label" for="stock">Stock</label>
                                            <div className="form-control-wrap">
                                                <input type="text" className="form-control" id="stock"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-mb-6">
                                        <div className="form-group">
                                            <label className="form-label" for="SKU">SKU</label>
                                            <div className="form-control-wrap">
                                                <input type="text" className="form-control" id="SKU"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="category">Category</label>
                                            <div className="form-control-wrap">
                                                <input type="text" className="form-control" id="category"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label className="form-label" for="tags">Tags</label>
                                            <div className="form-control-wrap">
                                                <input type="text" className="form-control" id="tags"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="upload-zone small bg-lighter my-2">
                                            <div className="dz-message">
                                                <span className="dz-message-text">Drag and drop file</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary"><em className="icon ni ni-plus"></em><span>Add
                                            New</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Save;