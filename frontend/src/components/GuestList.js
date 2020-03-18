
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ui } from "../reducers/ui"
import { Button } from 'library/Button'
import { guests, fetchGuests } from "../reducers/guests"
import { GuestItem } from "./GuestItem"

export const GuestList = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  
  const allGuests = useSelector(state => state.guests?.guests)
  const loading = useSelector(state => state.ui.isLoading)

  const handleFilterButtons = filterQuery => {
    setQuery(filterQuery)
    setPage(1)
  }

  const handleSearchSubmit = e => {
    e.preventDefault()
    setQuery(`?name=${searchInput}`)
    setSearchInput('')
    setPage(1)
  }


  const handleConfirmDelete = guest => {
    dispatch(guests.actions.setGuest(guest))
    dispatch(ui.actions.setConfirmDeleteOpen(true))
  }
  useEffect(() => {
    dispatch(fetchGuests(`/${query}`))
  }, [dispatch, query])


//Pagination made in frontend
const itemsPerPage = 12
const endIndex = page * itemsPerPage
const startIndex = endIndex - itemsPerPage
const currentItems = allGuests.slice(startIndex, endIndex)
const totalPages = Math.ceil(allGuests.length / itemsPerPage)

return (
  <>
    <div>
      <div>
        <Button title='Show all' onClick={() => handleFilterButtons('')} />
        <Button title='Attending' onClick={() => handleFilterButtons("?attending=true")} />
        <Button title='Not attending' onClick={() => handleFilterButtons("?attending=false")} />
      </div>
      <div>
        <form>
        <input
          onSubmit={handleSearchSubmit}
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          type='text'
          placeholder='First or last name'
        />
        </form>
      </div>
    </div>

    {loading && <p>...Loading</p>}
    {!loading && currentItems < 1 && <p>No guest found</p>}
    {!loading && currentItems !== 0 &&
      <div>
        <div>
          {currentItems.map(guest => (
            <GuestItem
              key={guest._id}
              guest={guest}
              onClickDelete={() => handleConfirmDelete(guest)}
            />
          ))}
        </div>
        <div>
          <div>
          {page > 1 && <Button title='Prev' onClick={() => setPage(page - 1)} />}
          {page < totalPages && <Button title='Next' onClick={() => setPage(page + 1)} />}
          </div>
          <p>Showing: {allGuests.length} | Page {page} of {totalPages}</p>
        </div>
      </div>
    }
  </>
)
}