
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { ui } from "../reducers/ui"
import {  guests, fetchGuests } from "../reducers/guests"
import { GuestItem } from "./GuestItem"

export const GuestList = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState("")
  const allGuests = useSelector(state => state.guests.guests)
  const loading = useSelector(state => state.ui.isLoading)

  const handleSearchSubmit = e => {
    e.preventDefault()
    setQuery(`?name=${searchInput}`)
    setSearchInput("")
    setCurrentPage(1)
  }

  const handleFilterButtons = filterQuery => {
    setQuery(filterQuery)
    setCurrentPage(1)
  }

  const handleConfirmDelete = guest => {
    dispatch(guests.actions.setGuest(guest))
    dispatch(ui.actions.setConfirmDeleteOpen(true))
  }
  useEffect(() => {
    dispatch(fetchGuests(`/${query}`))
  }, [dispatch, query])
}

//Pagination made in frontend
const itemsPerPage = 12
const endIndex = currentPage * itemsPerPage
const startIndex = endIndex - itemsPerPage
const currentItems = allGuests.slice(startIndex, endIndex)
const totalPages = Math.ceil(allGuests.length / itemsPerPage)

return (
  <>
    <div>
      <div>
        <button onClick={() => handleFilterButtons("")}>Show all</button>
        <button onClick={() => handleFilterButtons("?attending=true")}>
          Attending
        </button>
        <button onClick={() => handleFilterButtons("?attending=false")}>
          Not attending
        </button>
      </div>
      <div>
        <input
          onSubmit={handleSearchSubmit}
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          type='text'
          placeholder='First or last name'
          src={search}
        />
      </div>
    </div>

    {loading && <p>...Loading</p>}
    {!loading && currentItems === 0 && <p>No guest found</p>}
    {!loading && currentItems !== 0 && (
      <div>
        <div>
          {currentItems.map(guest => (
            <GuestItem
              guest={guest}
              key={guest._id}
              onClickDelete={() => handleConfirmDelete(guest)}
            />
          ))}
        </div>
      </div>
    )}
  </>
)