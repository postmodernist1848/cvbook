"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const people = [
  "Серов Даниил Алексеевич",
  "Бугрий Илья Михайлович",
  "Соловьев Роман Сергеевич",
  "Салятов Сергей Леонидович",
  "Крылов Андрей Игоревич",
  "Степурин Алексей Александрович",
  "Клюханов Назар Сергеевич",
  "Чупров Дмитрий Андреевич",
  "Шепелев Матвей Александрович",
  "Кубеш Сергей Дмитриевич",
  "Федоров Максим Денисович",
  "Пронкина Анна Денисовна"
]

export function CVBookList() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">CVbook</h1>
        <h2 className="text-xl font-bold tracking-tight">Публикуем список студентов <Link href="https://education.tbank.ru/academy/golang/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">курса</Link>, рекомендованных Т-Образованием.</h2>
        <div>
          Если вы нашли себя в списке, то вы получили реферал с пропуском скрининга и имеете право на прохождение технического собеседования в команду Т-Банк.
        </div>
      </div>
      <div className="space-y-4">
        {people.map((name, index) => (
          <Card key={index} className="hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center p-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold">{name}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
