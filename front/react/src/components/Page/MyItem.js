import React, {useEffect, useState} from 'react';
import SideNav from '../Layout/SideNav';
import classes from './MyItem.module.css';
import {FaDiscord, FaEthereum} from 'react-icons/fa'
import { CgUserAdd, CgSearch, CgUser } from "react-icons/cg";
import {AiOutlineSetting} from 'react-icons/ai';



const MyItem = (props) => {

    const [isAccount, setIsAccount] = useState(false);
    const [balance, setBalnace] = useState(0)
    const [saleNft, setSaleNft] = useState(0)

    const saleNftHandler = (event) => {
      setSaleNft(event.target.value - (event.target.value * 0.0333));
    }

    
    const handleCopyClipBoard = async (text) => {
      setIsAccount(true);
      // 2초 뒤에 돌아옴 
      setTimeout(function(){setIsAccount(false)}, 2000);
      try {
        await navigator.clipboard.writeText(text);
        // alert('클립보드에 링크가 복사되었습니다.');
      } catch (e) {
        // alert('복사에 실패하였습니다');
      }
     };
      
      return (
        <div>
           <SideNav />
           <div className={classes['padding-left360']}>
            {/* 클립보드 복사영역 */}
            <div>
              {
                isAccount == true
                ?
                <>
                  <button
                    className={classes['button-style1']}>
                    <FaEthereum/>Copied!
                  </button>
                </>
                :
                <>
                  <button
                   className={classes['account-button']} 
                   onClick={() => {handleCopyClipBoard(props.account)}}
                   ><FaEthereum/>{props.account}</button>
                </>
              }
       
              <button className={classes['button-style1']}>
                <CgUser/>Edit Profile
              </button>
              <button className={classes['button-style1']}>
                <FaDiscord/>Link Discord
              </button>
            </div> <br></br>

              {/* 보유 아이템 상태 영역 */}
            <div className={classes['state-borad']}>
              <div className={classes['flex-list']}>
                <div><span>TOTAL ITEMS</span></div>
                <div><span>0</span></div>
              </div>

              <div className={classes['flex-list']}>
                <div><span>UNLISTED ITEMS</span></div>
                <div><span>0</span></div>
              </div>

              <div className={classes['flex-list']}>
                <div><span>ESTIMATED VALUE</span></div>
                <div><span>0</span></div>
              </div>

              <div className={classes['flex-list']}>
                <div><span>LISTED ITEMS</span></div>
                <div><span>0</span></div>
              </div>
            </div>

            <h1>사용자 : {props.account} </h1>
            <div>남은 금액 : {balance}</div>  <br /><br />
            
            <div className={classes['flex-list-item']}>
              <div>아이템</div>
              <div>아이템 상장</div>
              <div>활동</div>
            </div>

            <div className={classes['item-list']}>
              <div>내가 가지고 있는 NFT1 </div>
              <div>내가 가지고 있는 NFT2 </div>
              <div>내가 가지고 있는 NFT3</div>
                <div className={classes['sale-box-range']}>
                  <div className={classes['sale-box']}>
                    <div>Item Price</div>
                    <span className={classes['align-center']}>
                      <FaEthereum/>
                      <input 
                        type="number"
                        onChange={saleNftHandler}/> 
                      </span>
                  </div>
                  <div className={classes['sale-box']}>
                    <div className={classes['align-center']}>Royalty <AiOutlineSetting/></div>
                    <span>Full{"(3.33%)"}<FaEthereum/>0</span>
                  </div>
                  <div className={classes['sale-box']}>
                    <div>Total Price</div>
                    <span>
                      <FaEthereum/>{saleNft}
                    </span>
                  </div>
                  <button className={classes['button-style1-bigger']}>Sale items</button>
                </div>
             
       
            </div>

            


          </div> 
        </div>
      );
}

export default MyItem