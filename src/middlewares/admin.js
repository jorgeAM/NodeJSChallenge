const admin = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Tienes que iniciar sesión' })
  }

  if (req.user.role !== 'admin') {
    const payload = {
      message: 'Solo los administradore puedes realizar esta acción'
    }

    return res.status(401).json({ payload })
  }

  next()
}

export default admin
