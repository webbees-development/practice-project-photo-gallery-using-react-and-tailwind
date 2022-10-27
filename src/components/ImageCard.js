import React from "react";

function ImageCard({ image }) {
    const tags = image.tags.split(",");

    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="aspect-square object-cover" src={image.webformatURL} alt=""></img>
    <div className="px-6 py-4">
      <div className="font-bold text-purple-500 text-xl mb-2">
        Photo by {image.user}
      </div>
      <ul>
        <li>
          <strong>Views: </strong>
          {image.views}
        </li>
        <li>
          <strong>Downloads: </strong>
          {image.downloads}
        </li>
        <li>
          <strong>Likes: </strong>
          {image.likes}
        </li>
      </ul>
    </div>
    <div className="px-6 py-4">
      {tags.map((tag, index) => {
        return <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">
        #{tag}
      </span>
      })}
    </div>
  </div>
}

export default ImageCard;