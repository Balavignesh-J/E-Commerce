import React from 'react'

const Profile = () => {
  return (
    <div className="w-96 mx-auto mt-20 p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg shadow-xl text-center">
      <img 
        src="https://api.dicebear.com/7.x/adventurer/svg?seed=profile" 
        alt="Profile Avatar" 
        className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md" 
      />
      <h1 className="mt-4 text-2xl font-bold">Balavignesh J</h1>
      <p className="text-gray-200">Frontend Developer</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://www.linkedin.com/in/bala-vignesh-9061a4292/" target='_blank' className="text-xl hover:text-blue-300">🔗 LinkedIn</a>
        <a href="https://github.com/Balavignesh-J" target='_blank' className="text-xl hover:text-blue-300">💻 GitHub</a>
      </div>
    </div>
  )
}

export default Profile
