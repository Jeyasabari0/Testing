type Greetprops = {
    name?: string
}

const Greet = (props: Greetprops) => {
    return (
        <div>
            HELLO {props.name}
        </div>
    )
}

export default Greet
