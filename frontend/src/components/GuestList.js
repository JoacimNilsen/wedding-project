import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { ui } from "reducers/ui"
import { MenuButton } from "library/MenuButton"
import { guests, fetchGuests } from "reducers/guests"
import { GuestItem } from "components/GuestItem"
import { ListWrapper } from "styles/FormStyle"

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 668px) {
    width: 650px;
    margin: auto;
  }
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NameInput = styled.input`
  margin-top: 10px;
  border: solid white 2px;
  background-color: rgba(255, 255, 255, 0.8);
  height: 30px;
  line-height: none;
  padding-left: 5px;
  font-style: italic;
  &:focus {
    border: 2px solid #ff9900;
    outline-color: #ff9900;
    outline-offset: 3px;
  }
`

export const GuestList = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [specificGuest, setSpecificGuest] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [filter, setFilter] = useState("")

  const allGuests = useSelector(state => state.guests.guests)
  const searchSpecificGuest = search =>
    allGuests.filter(guest => {
      const { first_name, last_name } = guest
      const searchRegEx = new RegExp(search, "i")
      console.log(
        search,
        first_name,
        first_name.match(searchRegEx) || last_name.match(searchRegEx)
      )
      if (first_name.match(searchRegEx) || last_name.match(searchRegEx)) {
        return true
      }
      return false
    })

  const loading = useSelector(state => state.ui.isLoading)

  const handleFilterButtons = filterQuery => {
    setQuery(filterQuery)
    setPage(1)
  }

  const handleSearchSubmit = e => {
    e.preventDefault()
    const specificGuest = searchSpecificGuest(searchInput)
    setFilter(searchInput)
    setSearchInput("")
    setPage(1)
    setSpecificGuest(specificGuest)
  }

  const handleConfirmDelete = guest => {
    dispatch(guests.actions.setGuest(guest))
    dispatch(ui.actions.setConfirmDeleteOpen(true))
  }
  useEffect(() => {
    dispatch(fetchGuests(`${query}`))
  }, [dispatch, query])

  const hasSpecificGuest = specificGuest.length > 0

  //Pagination made in frontend
  const itemsPerPage = 10
  const endIndex = page * itemsPerPage
  const startIndex = endIndex - itemsPerPage
  const currentItems = () => {
    if (hasSpecificGuest) {
      return specificGuest
    }
    return allGuests
  }
  const showGuests = currentItems().slice(startIndex, endIndex)
  const totalPages = Math.ceil(currentItems().length / itemsPerPage)

  return (
    <div>
      <FilterWrapper>
        <MenuButton title='Show all' onClick={() => handleFilterButtons("")} />
        <MenuButton
          title='Attending'
          onClick={() => handleFilterButtons("?attending=true")}
        />
        <MenuButton
          title='Not attending'
          onClick={() => handleFilterButtons("?attending=false")}
        />
      </FilterWrapper>
      <InputWrapper>
        <form onSubmit={handleSearchSubmit}>
          {!hasSpecificGuest ? (
            <>
              <NameInput
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                type='text'
                placeholder='Enter first or last name'
              />
              <button type='submit'>Search</button>
            </>
          ) : (
            <button onClick={() => setSpecificGuest([])}>{filter}</button>
          )}
        </form>
      </InputWrapper>

      {loading && <p>...Loading</p>}
      {!loading && currentItems() < 1 && <p>No guest found</p>}
      {!loading && currentItems() !== 0 && (
        <div>
          <ItemWrapper>
            {showGuests.map(guest => (
              <GuestItem
                key={guest._id}
                guest={guest}
                onClickDelete={() => handleConfirmDelete(guest)}
              />
            ))}
          </ItemWrapper>
          <PaginationWrapper>
            <div>
              {page > 1 && (
                <MenuButton title='Prev' onClick={() => setPage(page - 1)} />
              )}
              {page < totalPages && (
                <MenuButton title='Next' onClick={() => setPage(page + 1)} />
              )}
            </div>
            <p>
              Number of guests: {currentItems().length} | Page {page} of {totalPages}
            </p>
          </PaginationWrapper>
        </div>
      )}
    </div>
  )
}
