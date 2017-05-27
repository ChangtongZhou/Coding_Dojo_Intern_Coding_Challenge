import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;
import java.util.HashMap;

// Java Coding:
// Here we are trying to find knight's shortest path from
// given source to destination nodes
public class FindShortestPath {


	// Arrays of all 8 possible movements for a knight
	private int[] row = {2, 2, -2, -2, 1, 1, -1, -1};
	private int[] col = {-1, 1, 1, -1, 2, -2, 2, -2};
	private final int SIZE = 8;

	// Check if (x, y) is valid chess board coordinates
	// Note that a knight cannot go out of the chessboard
	public boolean valid (int x, int y){
		if (x < 0 || y < 0 || x >= SIZE || y >= SIZE){
			return false;
		}
		return true;
	}

	public static class Node{
		// (x, y) represents chess board coordinates
		// dist represent its minimum distance from the source

		int x, y, dist;
		public Node (int x, int y, int dist){
			this.x = x;
			this.y = y;
			this.dist = dist;
		}

	}

	// Find minimum number of steps taken by the knight
	// from source to reach destiniation using BFS
	public int BFS (Node src, Node dest){
		// map to check if matrix cell is visited before or not
		HashMap <Node, Boolean> visited = new HashMap<Node, Boolean>();

		// Create a queue and enqueue first node
		Queue<Node> q = new LinkedList<Node>();
		q.add(src);

		// run till queue is not empty
		while (!q.isEmpty()){
			// poll front node from queue and process it
			Node node = q.peek();
			q.poll();

			int x = node.x;
			int y = node.y;
			int dist = node.dist;

			// if destination is reached, return distance
			if (x == dest.x && y == dest.y){
				// System.out.println("Testing for the dist: " + dist);
				return dist;
			}

			// skip if location is visited before
			if (!visited.containsKey(node)){
				// mark current node as visited
				visited.put(node, true);

				// check for all 8 possible movements for a knight
				// and enqueue each valid movement into the queue
				for (int i = 0; i < 8; i++){
					// get the new valid position of knight from current
					// position on chessboard and enqueue it in the queue with +1 distance
					int newX = x + row[i];
					int newY = y + col[i];

					if (valid(newX, newY)){
						Node newNode = new Node(newX, newY, dist+1);
						q.add(newNode);
					}
				}

			}
		}
		return 0;
	}

	public int KnightsShortestPath(int start, int end){
		int[][] chessboard = new int[8][8];
		int count = 0;
		Node src = null, dest = null;

		// Create a numbered check board
		for (int i = 0; i < 8; i++){
			for (int j = 0; j < 8; j++){
				chessboard[i][j] = count;
				count++;
				//System.out.println("i: " + i + ", j: " + j + " : " + chessboard[i][j] + " ");
			}

		}

		// find start and end points:
		for (int i = 0; i < 8; i++){
			for (int j = 0; j < 8; j++){
				if (chessboard[i][j] == start){
					src = new Node (i, j, 0);
				}
				if (chessboard[i][j] == end){
					dest = new Node (i, j, 0);
				}
			}
		}

		return BFS (src, dest);

	}

	public static void main(String[] args){
		FindShortestPath test = new FindShortestPath();
		//int shortest_distance = test.KnightsShortestPath(20, 21);
		int shortest_distance = test.KnightsShortestPath(20, 50);
		System.out.println("The shortest path is: "+ shortest_distance);
		//System.out.println("-------------------------check board--------------------------------");

	}
}
