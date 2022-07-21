import * as C from './AppStyles';



const Page = () => {
    return (
        <C.Container>
            <C.Article>
                <h1>Simple Staps</h1>
                <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>

                <div className="areaMain">
                    <C.CardsArticle >
                        <C.NumberCard>1</C.NumberCard>
                        <C.TitleCard>Drink Water</C.TitleCard>
                        <C.TextCard>Sample text. Click to select the text box. Click again or double click to start editing the text.</C.TextCard>
                        <C.ButtonCard>More</C.ButtonCard>
                    </C.CardsArticle>


                    <C.CardsArticle>
                        <C.NumberCard>2</C.NumberCard>
                        <C.TitleCard>Use Face Masks</C.TitleCard>
                        <C.TextCard>Sample text. Click to select the text box. Click again or double click to start editing the text.</C.TextCard>
                        <C.ButtonCard>More</C.ButtonCard>
                    </C.CardsArticle>


                    <C.CardsArticle>
                        <C.NumberCard>3</C.NumberCard>
                        <C.TitleCard>Use Face Gloss</C.TitleCard>
                        <C.TextCard>Sample text. Click to select the text box. Click again or double click to start editing the text.</C.TextCard>
                        <C.ButtonCard>More</C.ButtonCard>
                    </C.CardsArticle>


                    <C.CardsArticle>
                        <C.NumberCard>4</C.NumberCard>
                        <C.TitleCard>Add Glycolic Acid</C.TitleCard>
                        <C.TextCard>Sample text. Click to select the text box. Click again or double click to start editing the text.</C.TextCard>
                        <C.ButtonCard>More</C.ButtonCard>
                    </C.CardsArticle>
                </div>
            </C.Article>

            <C.Footer>
                <p>Desenvolvido com ❤️ por Klaus Morotti</p>
            </C.Footer>
        </C.Container>
    )
}

export default Page;