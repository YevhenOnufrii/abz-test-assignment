export default function Input({ label = '', placeholder, errors, touched, ...props }) {
  const styles = {
    defaultStyle:
      'w-full p-4 border-[1px] border-[#D0CFCF] rounded-md text-black outline-none overflow-hidden focus:border-[4px] bg-white',
    errorStyle:
      'w-full p-4 border-[1px] border-[red] rounded-md text-black outline-none overflow-hidden focus:border-[4px]',
  }

  const spanStyles = {
    default: 'absolute text-base left-[15px] top-[15px] transition-[0.5s] ',
    active:
      'absolute text-base transition-[0.5s] px-3 left-[15px] top-[-8px] overflow-hidden text-xs tracking-wide bg-[white]',
  }

  return (
    <>
      <label
        className={
          errors[props.id] && touched[props.id]
            ? 'text-[red] text-[12px]'
            : 'text-[12px] text-[#7E7E7E] '
        }
        htmlFor={props.id}
      >
        <div className="input-box relative h-14 ">
          <input
            className={
              errors[props.id] && touched[props.id] ? styles.errorStyle : styles.defaultStyle
            }
            {...props}
          />
          <span className={props.value ? spanStyles.active : spanStyles.default}>
            {placeholder}
          </span>
        </div>
        {errors[props.id] && touched[props.id] && (
          <p className="pl-4 text-[red]">{errors[props.id]}</p>
        )}
        {label && <span className="block pl-4 mt-4">{label}</span>}
      </label>
    </>
  )
}
