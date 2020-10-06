import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <Layout title='Tus Favoritos' subtitle='Aqui puedes encontrar fotos de las mascotas que mas te gustaron'>
      <FavsWithQuery />
    </Layout>
  )
}
