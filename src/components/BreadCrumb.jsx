import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const BreadCrumb = ({ categories }) => (
  categories.length > 0 ? 
  <Breadcrumb className='breadcrumb' spacing="8px" separator={'>'} >
      {
          categories[0].path_from_root.map(({ name }) => {
              return (
                  <BreadcrumbItem key={name}>
                      <BreadcrumbLink >{name}</BreadcrumbLink>
                  </BreadcrumbItem>
              )
          })
      }
  </Breadcrumb> : <h5>No se encontraron categorias para esta busqueda...</h5>
  )

export default BreadCrumb;