import express from 'express'

import {
  signUp,
  signIn,
} from '../actions'

const router = express.Router()

router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up', {warning: ''})
})

router.post('/sign-up', (req, res) => {
  const {name, email, password} = req.body
  signUp(name, email, password)
    .then(() => {
      res.redirect('/')
    })
    .catch((error) => {
      if (error) {
        res.render('authentication/sign-up', {warning: 'Field blank or email already exists.'})
      }
    })
})

router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in', {warning: ''})
})

router.post('/sign-in', (req, res) => {
  const {email, password} = req.body
  signIn(email, password)
    .then((userInfo) => {
      res.redirect('/')
    })
    .catch((error) => {
      if (error) {
        res.render('authentication/sign-in', {warning: 'Email or password is invalid.'})
      }
    })
})

export default router
