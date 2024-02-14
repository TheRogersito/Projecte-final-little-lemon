import {useState} from "react";

const GuestsErrorMore = () => {
  return(
    <p className="FieldError">Guests is higher than 10</p>
  )
}
const GuestsErrorLess = () => {
  return(
    <p className="FieldError">Guests is lower than 2</p>
  )
}
const OccasionError = () => {
  return(
    <p className="FieldError">Occasion is not correct</p>
  )
}

function BookingForm(){
  const [form,setForm]= useState({
    date:Date(),
    time:"",
    guests:0,
    occasion:""
  })
  const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"]
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form done")
    clearForm()
  }
  const validForm = () =>{
    return(
      form.date &&
      form.time &&
      form.guests>=2 &&
      form.guests<=10 &&
      form.occasion
    )
  }
  const clearForm = () => {
    setForm({
      date:Date(),
      time:"",
      guests:0,
      occasion:""
    })
  }
    return(
      <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e) => {setForm({...form, date: e.target.value})}}/>
        <div></div>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" defaultValue={0} onChange={(e) => {setForm({...form, time: e.target.value})}}>
          <option value="" hidden selected>Select time</option>
          {availableTimes.map((e)=><option>{e}</option>)}
        </select>
        <div>
        </div>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="0" min="1" max="10" id="guests" onChange={(e) => {setForm({...form, guests: e.target.value})}}/>
        <div>
        {form.guests&&form.guests>=10?(<GuestsErrorMore/>):null}
        {form.guests&&form.guests<=2?(<GuestsErrorLess/>):null}
        </div>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"placeholder="Occasion" onChange={(e) => {setForm({...form, occasion: e.target.value})}}>
          <option value="" hidden selected>Select occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <div>
        {form.occasion&&form.occasion===""?(<OccasionError/>):null}
        </div>
        <div></div>
        <button type="submit" disabled={!validForm()}>Finish booking</button>
      </form>
        </>
    )
}
export default BookingForm;