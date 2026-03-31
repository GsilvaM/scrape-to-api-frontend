import { BookList } from "./components/BookListFecth"
import { AppSubtitle, AppTitle, Header, PageWrapper } from "./styles/AppStyle"
import GlobalStyle from "./styles/globalStyles"

function App() {
  return (

    <div>


      <GlobalStyle />

      <PageWrapper>
        <Header>
          <AppTitle>Book Scraper</AppTitle>
          <AppSubtitle>
            Dados coletados via web scraping com FastAPI + BeautifulSoup
          </AppSubtitle>
        </Header>

        <BookList />
      </PageWrapper>
    </div>)
}
export default App
