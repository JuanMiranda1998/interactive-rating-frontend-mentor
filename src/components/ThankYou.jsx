import './ThankYou.css'

export function ThankYou(number){
    return (
        <div className="thank-you">
          <img className='thank-you-image' src="/illustration-thank-you.svg" alt="thank you illustration" />
          <p className="thank-you_selection">You Selected <span>{number}</span> out of 5 </p>
          <h1 className='thank-you_title'>Thank you!</h1>
          <p className='thank-you_text'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}