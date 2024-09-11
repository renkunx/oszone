import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import Avatar from '@/assets/houston.webp'

export default function Github(props) {
  const [repoInfos, setRepoInfos] = useState({})
  useEffect(() => {
    getRepoInfos(props.repo)
  }, [])
  const getRepoInfos = async(repo) => {
    console.log('开始获取仓库信息:', repo)
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`, {
          headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      })
      const data = await res.json()
      console.log(data)
      setRepoInfos(data)
    } catch (e) {
      console.error('获取仓库信息时出错：', e)
    }
  }
  return (
    repoInfos.full_name ? <Card className="w-full max-w-sm not-content mt-4">
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold">{repoInfos.full_name}</div>
          <div className="rounded-full border w-8 h-8 flex items-center justify-center">
            {repoInfos.owner.avatar_url ? <img
              alt="User profile image"
              className="rounded-full"
              height="32"
              src={repoInfos.owner.avatar_url}
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            /> : null}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="text-sm leading-loose">
          {repoInfos.description}
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between align-middle">
        <div className="text-sm leading-loose text-gray-500 dark:text-gray-400 space-x-4">
          <Link className="font-semibold hover:underline underline-offset-2" href="#">
            {repoInfos.stargazers_count} Stars
          </Link>
          <Link className="font-semibold hover:underline underline-offset-2" href="#">
            {repoInfos.forks_count} Forks
          </Link>
        </div>
        <div className="text-xs">Last update: 2024-04-15</div>
      </CardFooter>
    </Card> : null
  )
}