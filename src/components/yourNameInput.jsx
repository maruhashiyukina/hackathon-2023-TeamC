export default function YourNameInput(props) {

    const handleOnChange = (e) => {
        props.setter(e.target.value)
    }

    return (
        <div style={{width: `${props.widthRatio}%`}}>
            <p style={{fontSize: 20, color:'#757575'}}>あなたの名前</p>
            <div><input onChange={handleOnChange} placeholder="例：山田太郎"
                        style={{width: '100%', height: '10%', padding: 20, fontSize: 16, border: "solid 3px #77af9c", borderRadius: "10px"}}></input></div>
        </div>
    )
}