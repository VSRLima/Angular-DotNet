using System;

namespace ProjectAngDotNet
{
    public class TodoItem
    {
        public long Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public bool isCompleted { get; set; }

        public DateTime Date { get; set; }
       
    }
}
