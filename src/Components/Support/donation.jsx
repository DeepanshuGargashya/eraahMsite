import ClearIcon from '@mui/icons-material/Clear';
import Flowers from '../../Assets/flowers.png'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Donation(){
    const[tags,changeTags] = useState('sort')
    const[money,changeMoney] = useState('50')

    const setTagValue=(tab)=>{
        changeTags(tab);
     }
    const setMoneyValue=(tab)=>{
        changeMoney(tab);
     }
    return(
        <>
        <div className="container px-0">
            <div className="header d-flex align-items-center px-0" style={{color:'white',padding:'20px'}}>
                <NavLink to={'/teacher'} style={{color:'white'}}><ClearIcon/></NavLink>
                <img className='px-3' src={Flowers} alt="" />
                <h3>Swetha Tiwari</h3>
            </div>

            <div className="search-tags d-flex justify-content-between mt-3 px-3">
            <div className="search" style={tags=='sort'? {backgroundColor:"#CEF3FF",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setTagValue('sort')}>Donation</div>
            <div className="search" style={tags=='all'? {backgroundColor:"#CEF3FF",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setTagValue('all')}>Payment</div>
            <div className="search" style={tags=='nature'? {backgroundColor:"#CEF3FF",color:'black',width:'fit-content'}:{backgroundColor:"#EDEDED",color:"#616161",width:'fit-content'}} onClick={()=>setTagValue('nature')}>Review</div>
            
           
            </div> 
            <h3 className='mt-3'>Choose Amount</h3>
            <p>The donation amount will be allocated to the areas of funds most needed</p>

            <div className="search-tags d-flex justify-content-between mt-3 px-3">
            <div className="search" style={money=='50'? {backgroundColor:"#FFC700",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setMoneyValue('50')}>50</div>
            <div className="search" style={money=='100'? {backgroundColor:"#FFC700",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setMoneyValue('100')}>100</div>
            <div className="search" style={money=='500'? {backgroundColor:"#FFC700",color:'black',}:{backgroundColor:"#EDEDED",color:"#616161",}} onClick={()=>setMoneyValue('500')}>500</div>
            <div className="search" style={money=='1000'? {backgroundColor:"#FFC700",color:'black',}:{backgroundColor:"#EDEDED",color:"#616161",}} onClick={()=>setMoneyValue('1000')}>1000</div>
           
            </div> 

            <div className="totalDonation">
                <div className="inr d-flex justify-content-between px-4 mx-3 mt-3 py-2">
                    <h4 className='mb-0'>Total Donation</h4>
                    <p className='mb-0'>500 INR</p>
                </div>
                <NavLink to={'/homePage'}><div class="btn btn-primary donateButton mt-4 d-flex m-auto" >Proceed to Payment</div></NavLink>
            </div>
        </div>
        
        
        </>
    )

}

export default Donation