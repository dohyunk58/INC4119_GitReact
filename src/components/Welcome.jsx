function Welcome({name}){
    const currentHour = new Date().getHours();
    const greeting = 
        currentHour < 12
            ? "좋은 아침"   
            : currentHour < 18
            ? "좋은 오후"
            : "좋은 저녁";

    return (
        <h3>
            {greeting}, {name}님!
        </h3>
    );
}

export default Welcome;