

const getAllPro = async(req,  res) => {
    res.status(403)
    throw new Error('Testing Async Err')
    res.status(200).json({msg:'Testing message '})
}

const getAllProStaic = async(req,  res) => {
    res.status(200).json({msg:'Testing message Static'})
}

module.exports = {getAllPro, getAllProStaic}