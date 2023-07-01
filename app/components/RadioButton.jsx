export default function RadioButton(props) {
  return (
    <div className="flex gap-x-3">
      <input {...props} />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  )
}
