import React from 'react'

export const ProductsBrandBox = ({ onChangeHandaler,filterItem,location }) => {

    const FilterMen = [
    {id: 1,name: "filter", title: "FRAME" },
    {id: 2,name: "filter", title: "HELMUT LANG" },
    {id: 3,name: "filter", title: "MUUBAA" },
    {id: 4,name: "filter", title: "PALM ANGELS" },
    {id: 5,name: "filter", title: "ROBERTO CAVALLI" },
    {id: 6,name: "filter", title: "ONIA" },
    {id: 7,name: "filter", title: "SANDRO" },
    {id: 8,name: "filter", title: "WOOLRICH" },
    {id: 9,name: "filter", title: "N.PEAL" },
    {id: 10,name: "filter", title: "DSQUARED2" },
    {id: 11,name: "filter", title: "BARBOUR" },
    {id: 12,name: "filter", title: "ASPESI" },
    {id: 13,name: "filter", title: "KENZO" },
    ]
    //filter Women
    const FilterWomen = [
        {id: 1,name: "filter", title: "RHEA COSTA" }, 
        {id: 3,name: "filter", title: "MUUBAA" }, 
        {id: 4,name: "filter", title: "SELF-PORTRAIT" },
        {id: 5,name: "filter", title: "HERVÉ LÉGER" },
        {id: 6,name: "filter", title: "VALENTINO" },
        {id: 7,name: "filter", title: "SANDRO" },
        {id: 8,name: "filter", title: "WOOLRICH" },
        {id: 9,name: "filter", title: "MARCHESA NOTTE" },
        {id: 10,name: "filter", title: "RETROFÊTE" },
        {id: 11,name: "filter", title: "ALTUZARRA" },
        {id: 12,name: "filter", title: "BRUNELLO CUCINELLI" },
        {id: 13,name: "filter", title: "ALEX MILL" },
        {id: 14,name: "filter", title: "RAG & BONE" },
        {id: 15,name: "filter", title: "JOSEPH" },
        {id: 16,name: "filter", title: "WALTER BAKER" },
        {id: 17,name: "filter", title: "REBECCA VALLANCE" },
        ]

    return (
        <>
        <div className='inputItem'>
                <input className='cursor-pointer' value={filterItem} onChange={onChangeHandaler} type="radio" name='filter' title="any" />
                <label >All</label>
            </div>
            {location.pathname.slice(0, 4) === "/men" ? FilterMen.map((e,i) => (
                <div key={i} className='inputItem'>
                <input className='cursor-pointer' value={filterItem} onChange={onChangeHandaler} type="radio" name={e.name} title={e.title} />
                <label >{e.title}</label>
            </div>
            )) : FilterWomen.map((e,i) => (
                <div key={i} className='inputItem'>
                <input className='cursor-pointer' value={filterItem} onChange={onChangeHandaler} type="radio" name={e.name} title={e.title} />
                <label >{e.title}</label>
            </div>
            ))}
        </>
    )
}
