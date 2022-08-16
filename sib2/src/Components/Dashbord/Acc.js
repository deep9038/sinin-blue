import React from 'react'
import {AiFillMessage} from "react-icons/ai"
import {IoNotificationsCircle} from 'react-icons/io5'
import {FaShoppingBag} from "react-icons/fa"
import {MdAccountTree}from "react-icons/md"
import {BsArrowRightShort} from 'react-icons/bs'
const Acc = () => {
  return (
    <div>
      <div className="acssasoris">
        <div className="acssasoris-item">
            <div className="account-details conshuit">
            <MdAccountTree className='icon-ass'/>
            <span class="ulz--title">Account details<BsArrowRightShort/></span>
            <p className="ulz-mt-1 ulz-mb-0">Provide personal details and how we can reach you</p>
            </div>
        </div>
        <div className="acssasoris-item">
        <div className="Massage conshuit">
        <AiFillMessage className='icon-ass'/>
            <span class="ulz--title">Account details<BsArrowRightShort/></span>
            <p class="ulz-mt-1 ulz-mb-0">Provide personal details and how we can reach you</p>
            </div>
        </div>
        <div className="acssasoris-item">
        <div className="My-order conshuit">
        <FaShoppingBag className='icon-ass'/>
            <span class="ulz--title">Account details<BsArrowRightShort/></span>
            <p class="ulz-mt-1 ulz-mb-0">Provide personal details and how we can reach you</p>
            </div>
        </div>
        <div className="acssasoris-item">
        <div className="Notification conshuit">
        <IoNotificationsCircle className='icon-ass'/>
            <span class="ulz--title">Account details<BsArrowRightShort/></span>
            <p class="ulz-mt-1 ulz-mb-0">Provide personal details and how we can reach you</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Acc
