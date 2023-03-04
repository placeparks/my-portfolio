import React from 'react'
import 'animate.css';
export default function Cards() {
  return (
    < div className='card-page'>

<div className="card1" data-aos="fade-down-right">
 <div className="card">
<img src="ipfs.JPG" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">IPFS Dapp</h5>
<p className="card-text">I developed this using Next.js. User can upload the file directly to IPFS from here.<br/>
Just upload the file and you will get the CID.</p>
<a href="https://ipfs-dapp-wine.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Explore</a>
</div>
</div>
</div>

<div className='card2' data-aos="zoom-in">
<div className="card animate__animated animate__backInUp" style={{marginTop:"70px"}}>
<img src="gallery.JPG" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">NFT Gallery</h5>
<p className="card-text">Check the Nfts in your wallets or any other wallet. You can also check different collections by just entering the contract address...</p>
<a href="https://gallery-gamma-bay.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Explore</a>
</div>
</div>
</div>

<div className='card3' data-aos="fade-down-left">
<div className="card" >
<img src="mint.JPG" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Minting site</h5>
<p className="card-text">Wanna help build your community? Want to give some benefits to your community? Here is the solution, give them gasless free Nft mint. We used openzeppelin relayer...
</p>    
<a href="https://ipfs-dapp-wine.vercel.app/mint" target="_blank" rel="noreferrer" className="btn btn-primary">Explore</a>
</div>
</div>
</div>


<div className='card4' data-aos="fade-down-right">
<div className="card"style={{height:"400px"}}>
<img src="web-sec.JPG" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Gated Website</h5>
<p className="card-text">Wanna token gate your website? Here explore what we are offering...</p>
<a href="https://sign-in-b4xz.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Explore</a>
</div>
</div>
</div>

<div className='card5' data-aos="zoom-in">
<div className="card">
<img src="social-login.JPG" className="card-img-top" alt="..." />
 <div className="card-body">
 <h5 className="card-title">Social Login</h5>
   <p className="card-text">No wallet? No account? No problem we have the solution. Get connected and through Biconomy smart account contract get your wallet address using social login...
</p>
<a href="https://social-login-snowy.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary ">Explore</a>
 </div>
 </div>
 </div>

 <div className='card6' data-aos="fade-down-left">
   <div className='card'>
   <img src="coupon1.JPG" className="card-img-top" alt="..." style={{height:"180px"}}/>
 <div className="card-body">
 <h5 className="card-title">Coupon generator</h5>
   <p className="card-text">Generate Coupons through smart contract...</p>
   <a href="https://coupon-generator-ecru.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Explore</a>
 </div>
</div>
</div>

<div className='card7' data-aos="zoom-in">
<div className="card animate__animated animate__backInUp" style={{marginTop:"70px"}}>
<img src="mailchain1.JPG" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Mailchain web3 experience</h5>
<p className="card-text">Notify your NFT claimers after claiming their NFT through MailChain...</p>
<a href="https://gallery-gamma-bay.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Explore</a>
</div>
</div>
</div>

<div className='card8' data-aos="zoom-in">
<div className="card animate__animated animate__backInUp" style={{marginTop:"70px"}}>
<img src="ww5.JPG" className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">Min with Credit Card</h5>
<p className="card-text">Want to give your users the service of buying NFTs with credit card??? Here explore this out.</p>
<a href="https://gallery-gamma-bay.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">Explore</a>
</div>
</div>
</div>

</div>

  )
}
