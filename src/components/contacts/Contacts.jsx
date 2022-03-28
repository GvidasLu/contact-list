
const Contacts = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.phoneNum}</td>
            </tr>
        </>
    )
}

export default Contacts;