import useStyles from './css/css'



function HomeMain(){
    const classes = useStyles();

    return (
        <>
            <div className={classes.homeBody}>
                <h1 className={classes.ueberschrift}>
                    Gute Erfahrung ist ein Gutes Geschäft
                </h1>
                <p className={classes.unterUeberschrift}>
                    Welkommen auf Odai's Blog
                </p>
                <a className={classes.unterUeberschrift}>
                    Mehr über mich
                </a>
            </div>  

        </>
    )
}


export default HomeMain