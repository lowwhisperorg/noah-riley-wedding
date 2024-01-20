

export default function Note() {
    const note = {
        left: `Thank you for joining with us in celebrating the beginning of our marriage! 
        We are so grateful for the family and community that surrounds us as we embark upon this lifelong journey. 
        The profound blessing of a community that is committed to encouraging, celebrating, supporting, and correcting one another is invaluable, especially in this pivotal season of our lives.
        Thank you for being that community! Paul said marriage is a profound mystery (Eph. 5:32) and we’re right there with him. 
        We look to Christ as our light, guide, and path (Ps. 25:4-5, 32:8, 119:105; Is. 30:21) and pray that we follow him well through abiding with him and seeking the encouragement and wisdom of other believers (Prov. 1:5, 11:14; Tit. 2:3-4).` ,
        right: `This is why we are so deeply appreciative of your prayers and support; of paramount importance, we glorify and give thanks to God who brought us together and continues to work in both of us.
         We have firsthand experienced the grace of God and his imminent Spirit in our relationship, and we deeply hope that you know Him as well. 
        In John 17, Jesus prayed to the Father, “And this is eternal life, that they know you, the only true God, and Jesus Christ whom you have sent” (John 17:3). See Rom. 10:9-10. `,
        quote: `“Only fear the Lord and serve him faithfully with all your heart. For consider what great things he has done for you” (1 Sam. 12:24).`
    }

    return (

        <div id="A NOTE FROM US" className="flex flex-col items-center justify-center w-screen min-h-screen">

            <div className="hidden grid-cols-2 shadow-xl rounded-lg max-w-screen-lg md:grid">
                <div className="text-justify shadow-inner p-24 flex-1">
                    <h1 className="text-center pb-6 text-2xl tracking-widest">A NOTE FROM US</h1>
                    <div>
                        <p>
                            {note['left']}
                        </p>
                    </div>
                </div>
                <div className="text-justify shadow-inner p-24 flex-1">
                    <div>
                        <p>
                            {note['right']}
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:hidden grid-cols-1  rounded-lg max-w-screen-lg">
                <div className="text-justify p-14 pb-0 flex-1">
                    <h1 className="text-center pb-6 text-2xl tracking-widest">A NOTE FROM US</h1>
                    <div>{note['left']}</div>
                    <br/>
                    <div>{note['right']}</div>
                </div>
            </div>

            <div className="p-14">
                <p className="font-medium text-justify text-xl">
                    {note['quote']}
                </p>
            </div>



        </div>
    )
}